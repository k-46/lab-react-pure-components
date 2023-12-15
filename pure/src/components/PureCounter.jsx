import React, { Component, PureComponent } from 'react'

class PureCounter extends PureComponent {
    constructor() {
      super()
    
      this.state = {
         count: 0,
         toggle : false
      }
    }

    handleIncrement=()=>{
        if(this.state.toggle){
            this.setState({count: this.state.count +1})
        }else{
            this.setState({count: this.state.count})
        }
    }
    
    handleToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

  render() {
    console.log("This is Pure Component")
    return (
      <>
        <h2>
            Simple Component
        </h2>
        <h3>
            {this.state.count}
        </h3>
        <button style={{color:this.state.toggle ? "inherit" :"red"}} onClick={this.handleToggle}>
            Set Toggle
        </button>
        <button onClick={this.handleIncrement}>
            Add
        </button>
      </>
    )
  }
}

export default PureCounter