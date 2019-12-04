import React, { Component } from 'react'
import './App.css'
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"

class App extends Component {

state = {
  messages: {},
  pseudo: this.props.match.params.pseudo //react routeur creer des props automatiquement lorsqu'on fait une redirection avec une variable
}
 
addMessage = message =>{
  const messages = {...this.state.messages}
  messages[`message-${Date.now()}`] = message
  this.setState({messages})
}

  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <Message
        key ={key} 
        pseudo={this.state.messages[key].pseudo}
        message={this.state.messages[key].message} />
    ))

    return (
      <div className='box'>
        <div>
          <div className="messages">
             <div className = "message">
               {messages}
             </div>
          </div>
        </div>
        <Formulaire length={150} addMessage={this.addMessage} pseudo={this.state.pseudo}></Formulaire>
      </div>
    )
  }
}

export default App
