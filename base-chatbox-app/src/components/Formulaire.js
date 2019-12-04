import React, { Component } from 'react';

class Formulaire extends Component {

    state = {
        message :"",
        longueur : this.props.length
    }


    createMessage = () =>
    {
        const {addMessage, pseudo} = this.props
        const message ={
            pseudo,
            message : this.state.message
        }
        addMessage(message)

        //Reset message et longueur apres l'envoie
        this.setState({message:"", longueur : this.props.length})
    }

    handleSubmit = event =>
    {
        event.preventDefault()
        this.createMessage()        
    }

    handleChange = event =>
    {
        const message = event.target.value
        const longueur = this.props.length - message.length
        this.setState({message,longueur})
    }

    handleKeyUp = event =>
    {
        if(event.key === 'Enter')
            this.createMessage()    
    }

    render()
    {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea required maxLength={this.state.longueur} onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.message}></textarea>
                <div className='info'>{this.state.longueur}</div>
                <button type="submit">Envoyer!</button>
            </form>
        );
    }
}

export default Formulaire;