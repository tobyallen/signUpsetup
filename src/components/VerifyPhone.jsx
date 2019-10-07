import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
// import { throws } from 'assert';
import axios from 'axios';

class VerifyPhone extends Component{
  state = {
      status: ''
  }

  saveAndContinue = async (e, phone, code) => {
      e.preventDefault()
      console.log(`Phone is ${phone} code is ${code}`)
      const resp = await axios
        .post(`${process.env.REACT_APP_FUNCTIONS_URL}/verify?phone=${phone}&code=${code}`)
      console.log(resp);
      this.props.handleChange()
      if (resp.data.status === 'approved') {
        this.props.nextStep();
      } else {
        this.setState({status: 'You entered the wrong code.'})
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
            <h1 className="ui centered">Enter Verification Code</h1>
            <Form.Field>
                <label>Verification Code</label>
                <input placeholder='Verification Code'
                onChange={this.props.handleChange('code')}
                />
            </Form.Field>
            <p>{this.state.status}</p>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={ (e) => {
                    console.log(e)
                    this.saveAndContinue(e, values.phone, values.code)
                  }
              }>Verify Code</Button>
        </Form>
        )
    }
}

export default VerifyPhone;
