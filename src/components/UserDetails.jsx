import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class UserDetails extends Component{

    sendVerification = async(phone) => {
      console.log(`Phone is ${phone}`)
      const resp = await axios
          .post(`${process.env.REACT_APP_FUNCTIONS_URL}/verify?phone=${phone}`)
      console.log(resp);
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = async (e, phone) => {
        e.preventDefault()
        await this.sendVerification(phone);
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter Details</h1>
                <p>First we're going to capture some information about you to help us serve you better.</p>
                <Form.Field>
                    <label>Name</label>
                    <input
                    placeholder='Name'
                    onChange={this.props.handleChange('name')}
                    defaultValue={values.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input
                    placeholder='Phone'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    />
                </Form.Field>
                <p>Clicking Verify Phone will send a one time code to your phone.</p>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={ (e) => {
                      this.saveAndContinue(e, values.phone)
                      }
                  }>Verify Phone</Button>
            </Form>
        )
    }
}

export default UserDetails;
