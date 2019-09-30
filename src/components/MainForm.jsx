import React, { Component } from 'react';
import Welcome from './Welcome';
import UserDetails from './UserDetails';
import EmailCapture from './EmailCapture';
import VerifyPhone from './VerifyPhone';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        name: '',
        phone: '',
        email: '',
        trade: '',
        verifyResp: '',
        verifyConfResp: '',
        emailResp: '',
        code: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        console.log(input,":",event.target.value);
    }

    handleEmail(emailAdd) {
      this.setState({
        email: emailAdd
      });
    }

    render(){
        const {step} = this.state;
        const { name, phone, email, code, trade } = this.state;
        const values = { name, phone, email, code, trade };
        switch(step) {
        case 1:
              return <Welcome
                      nextStep={this.nextStep}
                      handleChange = {this.handleChange}
                      values={values}
                      />
        case 2:
            return <UserDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <VerifyPhone
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 4:
            return <EmailCapture
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    handleEmail = {this.handleEmail}
                    values={values}
                    />
        case 5:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 6:
            return <Success />
        default:
            return <Success />
        }
    }
}

export default MainForm;
