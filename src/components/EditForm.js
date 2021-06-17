import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, {Component} from 'react';
import { updateForm } from '../graphql/mutations';

class EditForm extends Component {

    state = {
        show: false,
        id:"",
        form_name: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        fields: "",
        formData: {
            form_name: this.props.form_name,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            phone: this.props.phone,
            fields: this.props.fields
        }
    }

    handleModal = () => {
        this.setState({ show: !this.state.show})
        document.body.scrollTop= 0
        document.documentElement.scrollTop =0 
    }

    handleUpdateForm = async (event) => {
        event.preventDefault()

        const input = {
            id: this.props.id,
            form_name: this.state.formData.form_name,
            first_name: this.state.formData.first_name,
            last_name: this.state.formData.last_name,
            email: this.state.formData.email,
            phone: this.state.formData.phone,
            fields: this.state.formData.fields
        }

        await API.graphql(graphqlOperation(updateForm, {input}))

        //force close the modal
        this.setState({ show: !this.state.show })
    }

    handleFormName = event => {
        this.setState({
            formData: {...this.state.formData, form_name: event.target.value}
        })
    }

    handleFirstName = event => {
        this.setState({
            formData: {...this.state.formData, first_name: event.target.value}
        })
    }

    handleLastName = event => {
        this.setState({
            formData: {...this.state.formData, last_name: event.target.value}
        })
    }

    handleEmail = event => {
        this.setState({
            formData: {...this.state.formData, email: event.target.value}
        })
    }

    handlePhone = event => {
        this.setState({
            formData: {...this.state.formData, phone: event.target.value}
        })
    }

    handleFields = event => {
        this.setState({
            formData: {...this.state.formData, fields: event.target.value}
        })
    }

    componentWillUnmount =async () => {
        await Auth.currentUserInfo()
            .then (user => {

            }) 
    }

    render() {
        return (
            <>
            { this.state.show && (
                <div className="modal">
                    <button className="close"
                    onClick={this.handleModal}>
                        X
                    </button>

                    <form className="add-post"
                    onSubmit={(event) => this.handleUpdateForm(event)}>

                        <input style={{fontSize: "9px"}}
                            type="text" placeholder="Form Name"
                            name="form_name"
                            value={this.state.formData.form_name}
                            onChange={this.handleFormName}
                        />

                        <input style={{fontSize: "9px"}}
                            type="text" placeholder="First Name"
                            name="first_name"
                            value={this.state.formData.first_name}
                            onChange={this.handleFirstName}
                        />

                        <input style={{fontSize: "9px"}}
                            type="text" placeholder="Last Name"
                            name="last_name"
                            value={this.state.formData.last_name}
                            onChange={this.handleLastName}
                        />

                        <input style={{fontSize: "9px"}}
                            type="text" placeholder="Email"
                            name="email"
                            value={this.state.formData.email}
                            onChange={this.handleEmail}
                        />

                        <input style={{fontSize: "9px"}}
                            type="text" placeholder="Phone"
                            name="phone"
                            value={this.state.formData.phone}
                            onChange={this.handlePhone}
                        />

                    <input style={{fontSize: "9px"}}
                            type="textarea" placeholder="Form Fields"
                            name="fields"
                            value={this.state.formData.fields}
                            onChange={this.handleFields}
                        />

                        <button>Update Form</button>


                    </form>
                </div>
            )            }


                <button onClick={this.handleModal}>Edit</button>
            </>
        )
    }
}

export default EditForm;