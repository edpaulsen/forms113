import React, {Component} from 'react';
import { listForms } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import DeleteForm from './DeleteForm';
import EditForm from './EditForm';
import { onCreateForm, onDeleteForm, onUpdateForm} from '../graphql/subscriptions'



class DisplayForms extends Component {

    state = {
        forms: []
    }

    componentDidMount = async () => {
        this.getForms()

        this.createFormListener = API.graphql(graphqlOperation(onCreateForm))
            .subscribe({
                next: formData => {
                    const newForm= formData.value.data.onCreateForm
                    const prevForms = this.state.forms.filter(form => form.id !== newForm.id)

                    const updatedForms = [newForm, ...prevForms]

                    this.setState({ forms: updatedForms })
                    window.$newFormId = newForm.id

                    
                }

            })

        this.deleteFormListener = API.graphql(graphqlOperation(onDeleteForm))
            .subscribe({
                next: formData => {

                    const deletedForm = formData.value.data.onDeleteForm
                    const updatedForms = this.state.forms.filter(form => form.id !== deletedForm.id)
                    this.setState({forms: updatedForms})
                }
            })

        this.updateFormListener =API.graphql(graphqlOperation(onUpdateForm))
            .subscribe({
                next: formData => {
                    const {forms} = this.state
                    const updateForm = formData.value.data.onUpdateForm
                    const index = forms.findIndex(form => form.id === updateForm.id)
                    const updateForms = [
                        ...forms.slice(0, index), 
                        updateForm,
                        ...forms.slice(index+1)
                        ]

                        this.setState({ forms: updateForms})
                        
                }
            })
    }

    componentWillUnmount() {
        this.createFormListener.unsubscribe()
        this.deleteFormListener.unsubscribe()
        this.updateFormListener.unsubscribe()
        
    }

    getForms = async () => {
        const result = await API.graphql(graphqlOperation(listForms))
        this.setState({ forms: result.data.listForms.items})
        console.log("All Posts: ", result.data.listForms.items)
    }

    render() {
        const { forms } = this.state

        return forms.map(( form ) => {


            if(form.id===window.$newFormId){
            return (

                
                <div className="space posts backgroundChange" style = {rowStyle} key={form.id}>

                                            <p className="inline">{form.form_name}</p>
                                            <p className="inline nameCSS" >{form.first_name} {form.last_name}</p>
                                            <p className="inline">{form.email}</p>
                                            <p className="inline">{form.phone}</p>
                                            <p className="inline formBold">{form.fields}</p>
                                            <p className="inline"><DeleteForm data={form} /></p>
                                            <p className="inline"><EditForm/></p>

                </div>
                
            )
            } else {
                return (

                
                    <div className="space posts" style = {rowStyle} key={form.id}>
    
                                                <p className="inline">{form.form_name}</p>
                                                <p className="inline nameCSS" >{form.first_name} {form.last_name}</p>
                                                <p className="inline">{form.email}</p>
                                                <p className="inline">{form.phone}</p>
                                                <p className="inline formBold">{form.fields}</p>
                                                <p className="inline"><DeleteForm data={form} /></p>
                                                <p className="inline"><EditForm {...form} /></p>
    
                    </div>
                    
                )
            }

        })
    
}
}

const rowStyle = {
    background: '#f4f4f4',
    padding: '10px',
    border: '1px #ccc dotted',
    margin: '14px'
}

export default DisplayForms;

