import React, { Component } from 'react';
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
        brand: '',
        verifyResp: '',
        verifyConfResp: '',
        emailResp: '',
        code: '',
        welcomeTitle: '',
        welcomeText: '',
        welcomeEmail: ''
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        this.setState({ 
            ...this.state,
            name: urlParams.get('name'),
            brand: urlParams.get('brand'),
            welcomeTitle: urlParams.get('welcomeTitle'),
            welcomeText: urlParams.get('welcomeText'),
            welcomeEmail: urlParams.get('welcomeEmail')
        })
        console.log(this.state);
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
        const { name, phone, email, code, brand, welcomeTitle, welcomeText, welcomeEmail } = this.state;
        const values = { name, phone, email, code, brand, welcomeTitle, welcomeText, welcomeEmail };
        console.log(values);
        switch(step) {
        case 1:
            return <UserDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <VerifyPhone
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <EmailCapture
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    handleEmail = {this.handleEmail}
                    values={values}
                    />
        case 4:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 5:
            return <Success 
                    values={values}
                    />
        default:
            return <Success />
        }
    }
}

export default MainForm;
