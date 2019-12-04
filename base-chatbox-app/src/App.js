import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"

//Firebase
import base from "./components/base"

class App extends Component {

state = {
  messages: {},
  pseudo: this.props.match.params.pseudo //react routeur creer des props automatiquement lorsqu'on fait une redirection avec une variable
}

messagesRef = createRef(); //initialisation d'une ref qui va me permettre d'avoir acces au scroll

//permet d'ajouter et charger les messages sur firebase. il est appelé une fois a l'initialisation de l'app ou au rechargement de la page
componentDidMount (){
  base.syncState('/',{context:this,state: 'messages'})
}

//permet de voir si le state est mis à jour. il est appelé a chaque fois que le state change
componentDidUpdate (){
  const ref = this.messagesRef.current //le 'current' fait reference a l'appel fait dans la <div>
  ref.scrollTop = ref.scrollHeight //permet de se positionner en bas du scroll
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
          <div className="messages" ref={this.messagesRef}> {/** mise en place d'une reference sur la partie qui affiche les messages*/}
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
