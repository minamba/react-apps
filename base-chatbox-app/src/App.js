import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'
import Formulaire from "./components/Formulaire"
import Message from "./components/Message"

//Firebase
import base from "./components/base"

// Animations
import {CSSTransition,TransitionGroup} from "react-transition-group"

class App extends Component {

state = {
  messages: {},
  pseudo: this.props.match.params.pseudo //react routeur creer des props automatiquement lorsqu'on fait une redirection avec une variable
}

messagesRef = createRef(); //initialisation d'une ref qui va me permettre d'avoir acces au scroll

//permet d'ajouter et charger les messages sur firebase. il est appelé une fois a l'initialisation de l'app ou au rechargement de la page
componentDidMount (){
  base.syncState('/',{context:this, state:'messages'})
}

//permet de voir si le state est mis à jour. il est appelé a chaque fois que le state change
componentDidUpdate (){
  const ref = this.messagesRef.current //le 'current' fait reference a l'appel fait dans la <div>
  ref.scrollTop = ref.scrollHeight //permet de se positionner en bas du scroll
}
 
addMessage = message =>{
  const messages = {...this.state.messages}
  messages[`message-${Date.now()}`] = message
  
  //limiter les messages a 10 dans mon states et donc aussi dans firebase vu qu'ils sont syncronisé
  Object
  .keys(messages)
  .slice(0, -10) //permet de mettre des borne
  .forEach(key => { //cette boucle permet de mettre une valeur null a tout ce qui est en dehors des bornes
    messages[key] = null
  }) 



  this.setState({messages})
}

isUser = pseudo => pseudo === this.state.pseudo // fonction iseur qui prend en param pseudo et on lui affecte le current user. donc isuser retourne le current user

  render () {
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition timeout={2000} classNames="fade"  key ={key}>
        <Message        
          isUser = {this.isUser} 
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message} />
      </CSSTransition>

    ))

    return (
      <div className='box'>
          <TransitionGroup className="messages" ref={this.messagesRef}> {/** mise en place d'une reference sur la partie qui affiche les messages*/}
             <div className = "message">
               {messages}
             </div>
          </TransitionGroup>

        <Formulaire length={150} addMessage={this.addMessage} pseudo={this.state.pseudo}></Formulaire>
      </div>
    )
  }
}

export default App
