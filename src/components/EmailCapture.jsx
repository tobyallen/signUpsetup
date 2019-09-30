import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class EmailCapture extends Component {
    state = {
        suggestion: '',
        score: '',
        verdict: ''
    }

    saveAndContinue = async (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    validate = async (e, emailAdd) => {
        e.preventDefault();
        console.log('Clearing State');
        this.setState({
          verdict: '',
          score: '',
          suggestion: ''
        });

      const resp = await axios
            .post(`${process.env.REACT_APP_FUNCTIONS_URL}/validateEmail?email=${emailAdd}`)
        console.log(resp);
        let result = JSON.parse(resp.data).result
        console.log(resp.data);
        console.log("Result")
        console.log(result.verdict)
        this.setState({
          verdict: result.verdict,
          score: result.score
        });
        if (result.suggestion != null ) {
          console.log(`Suggestion: ${result.suggestion}`)
          this.setState({
            suggestion: result.suggestion
          });
        }
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Email Address</h1>
            <Form.Field>
                <label>Email Address</label>
                <input
                type='email'
                placeholder='Email Address'
                onChange={this.props.handleChange('email')}
                defaultValue={values.email}
                />
            </Form.Field>
            <Button onClick={ (e) => {
                    console.log(e)
                    this.validate(e, values.email)
                }
              }>Validate</Button>
              <p></p>
            { (this.state.suggestion !== '') ? <div>Suggestion:{this.state.suggestion}</div> : null }
            { (this.state.score !== '') ? <div>Score:{this.state.score}</div> : null }
            { (this.state.verdict !== '') ? <div>Verdict:{this.state.verdict}</div> : null }
            { (values.email !== '') ? <div>Email:{values.email}</div> : null }
            <div>
            <p></p>
            <Button onClick={this.back}>Back</Button>
            <Button disabled={ this.state.score < '0.49' } onClick={this.saveAndContinue}>Save And Continue </Button>
            </div>
        </Form>
        )
    }
}

export default EmailCapture;
