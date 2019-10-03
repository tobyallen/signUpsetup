import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import tape from '../measuring-tape.png'

class Welcome extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props

        return(
            <Form >
                <img src={tape} />
                <h1 className="ui centered">Tradie Finder</h1>
                <p>Hello, welcome to Tradie Finder.</p>
                <p>We connect you with Trusted Trades who will turn up on time & do a great job <b>guaranteed</b>!</p>
                <p>Firstly can you let us know what sort of Trade you're after?</p>

                  <Form.Field>
                      <label>Trade</label>
                      <select
                        value={values.trade}
                        onChange={this.props.handleChange('trade')}
                      >
                        <option value="Builder">Builder</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Gardener">Gardener</option>
                      </select>
                  </Form.Field>
                  <Button onClick={this.saveAndContinue}>Lets Go!</Button>
            </Form >
        )
    }
}

export default Welcome;
