import React from 'react';
import './App.css';
import DisplayForms from './components/DisplayForms';
import CreateForm from './components/CreateForm';
import { withAuthenticator } from 'aws-amplify-react'

function App() {
    return (
        <div className="App">
          <CreateForm />
          < DisplayForms />

        </div>
    );
}

export default withAuthenticator(App,
  { includesGreeting: true});
