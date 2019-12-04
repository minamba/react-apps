import React, { Component } from 'react';
import { Redirect } from  'react-router-dom'
class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat:false
    }

    handleChange = event => {
    const pseudo = event.target.value
    this.setState({pseudo})
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.setState({goToChat:true})
    }

    render() {
        if(this.state.goToChat){
         return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }
        else{
            return (
                <div className='connexionBox'>
                    <form className='connexion' onSubmit={this.handleSubmit}>
                        <input placeholder ='Pseudo' type='text' value={this.state.pseudo} onChange={this.handleChange} required></input>
                        <button type='submit'>connexion</button>
                    </form>               
                </div>
            );
        }
    }
}

export default Connexion;