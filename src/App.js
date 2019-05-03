import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly:true
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name,value}=event.target
    this.setState({
      [name]:value
    })
  }

 
  render() {
    return (
      <form>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} />
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />


        <textarea value={"some Default value"} />
<br/>
<lable>
<input type="checkbox"
name="isFriendly"
checked={this.state.isFriendly}
onChange={this.handleChange} />
is Friendly
        </lable>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}

export default App
