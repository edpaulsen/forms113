import { API, graphqlOperation } from 'aws-amplify';
import React, {Component} from 'react';
import { deleteForm } from '../graphql/mutations';

class DeleteForm extends Component {

    handleDeleteForm = async formId => {
        const input = {
            id: formId
        }

        await API.graphql(graphqlOperation(deleteForm, {input}))

    }

    render() {

        const form = this.props.data

        return (
            <button onClick= { () => this.handleDeleteForm(form.id)}>Delete</button>
        )
    }
}

export default DeleteForm;