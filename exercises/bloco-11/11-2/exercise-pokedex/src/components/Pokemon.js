import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        return (
            <>
                <h1>{ this.props.name }</h1>
                <span>{ this.props.type }</span>
                <span>{ this.props.weight.value } { this.props.weight.measurementUnit }</span>
                <img src={this.props.img} alt="Pokemon img" />
            </>
        )
    }
}

export default Pokemon;