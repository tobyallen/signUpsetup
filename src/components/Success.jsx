import React, { Component } from 'react';

class Success extends Component{
    render(){
        const { values } = this.props
        return(
            <div>
                <h1 className="ui centered">Thanks!</h1>
                <p>You've successfully signed up for eletronic notifications from {values.brand}.</p>
            </div>
        )
    }
}

export default Success;
