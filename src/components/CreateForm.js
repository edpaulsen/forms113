import { API, graphqlOperation } from 'aws-amplify';
import React, {Component} from 'react';
import { createForm } from '../graphql/mutations';

class CreateForm extends Component {

    state = {
        form_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        fields: ""
    }

componentDidMount = async() => {
    //TODO
}

handleChangeForm = event => this.setState({ [event.target.name]: event.target.value })

handleAddForm = async event => {

    event.preventDefault()



    const input = {
        form_name: this.state.form_name,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone: this.state.phone,
        fields: this.state.fields
    }
    


    await API.graphql(graphqlOperation(createForm, {input} ))


    this.setState({
        form_name: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        fields: ""
     })
}

    render() {
        return (
            <form className="add-post"
            onSubmit={this.handleAddForm}>
                
                <input style={{ font: '8px'}}
                type="text" placeholder="Form Name"
                name="form_name"
                required
                value={this.state.form_name}
                onChange={this.handleChangeForm}
                />

                <input style={{ font: '8px'}}
                type="text" placeholder="First Name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChangeForm}
                required/>

                <input style={{ font: '8px'}}
                type="text" placeholder="Last Name"
                name="last_name"
                required
                value={this.state.last_name}
                onChange={this.handleChangeForm}/>

                <input style={{ font: '8px'}}
                type="text" placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeForm}/>

                <input style={{ font: '8px'}}
                type="text" placeholder="Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChangeForm}/>

                <textarea
                type="text"
                name="fields"
                rows="2"
                columns="12"
                required
                placeholder="Form Fields"
                value={this.state.fields}
                onChange={this.handleChangeForm}/>

                <input type="submit"
                className="btn"
                style={{ fontSize: '11px'}}/>

            </form>

        )
    }
}

export default CreateForm;