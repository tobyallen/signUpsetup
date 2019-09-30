import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import axios from 'axios'

class Confirmation extends Component{

  sendDetails = async(values) => {
    console.log(values)

      let body = {
        'name': values.name,
        'phone': values.phone,
        'email': values.email,
        'trade': values.trade
      };

      let config = {
          headers: {
            'Content-Type': 'application/json'
        }
      };
      console.log(body)
      const resp = await axios
        .post('https://tobytes.ngrok.io/conversations/createFromForm',
          body,
          config);
    console.log(resp);
  }

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

  saveAndContinue = async (e, values) => {
      e.preventDefault()
      await this.sendDetails(values);
      this.props.nextStep()
  }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        console.log(values);

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Name: {values.name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>Phone: {values.phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:{email}'>Email: {values.email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='wrench' />
                        <List.Content>Trade:{values.trade}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={ (e) => {
                      this.saveAndContinue(e, values)
                      }
                  }>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;
