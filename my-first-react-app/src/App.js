import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1 :{
    nom: 'Antho',
    age: 27
  },
  membre2 :{
    nom: 'Segolene',
    age: 27
  },
  membre3 :{
    nom: 'Eléanor',
    age: 0
  },
  membre4 :{
    nom: 'Mocha',
    age: 2
  }
}


class  App extends Component{

  // je met mon object famille dans un state que je vais pouvoir utiliser ensuite pour afficher chaque élément
  state = {
    famille,
    isShow : false
  }

  //fonction d'incrémentation de l'age en méttant a jour le state
  handleClick = (num) => {
    const famille = {...this.state.famille}
    famille.membre1.age += num
    this.setState({ famille }) //mise a jour du state apres modif

  }
  ///////////////////////////////////

    //fonction de modification de champs d'un object
    handleChange = (event, id) => { // je passe un event
      const famille = {...this.state.famille}
      const nom = event.target.value
      famille[id].nom = nom
      this.setState({ famille }) //mise a jour du state apres modif
      }
    ///////////////////////////////////


    //fonction qui cache le nom
      hideName = id => { // je passe un event
      const famille = {...this.state.famille}
      famille[id].nom = 'X'
      this.setState({ famille }) //mise a jour du state apres modif
      }
    ///////////////////////////////////


    //fonction qui affiche la description
    handleShowDescription = () => {
      const isShow = !this.state.isShow  //permet de mettre a true si isShow est a false et vise versa
      this.setState({isShow})
    }
    ////////////////////////////////////

  render() {
    const{famille, isShow} = this.state
    
    
    //permet de faire une condition plus complexe avec un if else. ceci se fait uniquement dans le render
    let description = null

    if(isShow)
    {
      description = (
                      <strong>je suis malien.</strong>)
    }
    ////////////////////////////////////////////////////////////////

    const list = Object.keys(famille) //creation d'un tableau a partir de l'objet famille
    .map(membre =>( //.map permet de boucler dans l'object famille
      <Membre
      key = {membre} // clé unique qui permettra à react de modifier l'element a changer sans retravailler sur toute la liste
      handleChange = { event => this.handleChange(event, membre)}
      hideName ={() => this.hideName(membre)}
      age = {famille[membre].age}
      nom = {famille[membre].nom}
      ></Membre>
    ))

  return (
    <div className="App">
      <h1>React app</h1>   
       {list}
       {/*<Membre
        age={famille.membre4.age}
        nom ={famille.membre4.nom}>
        {description}

        <button onClick={this.handleShowDescription}>  
        {
          isShow? 'Cacher' : 'Montrer' //condition ternaire pour changer le nom du bouton
        }
        </button>  
        
      </Membre>*/}

      {/* ajout d'une prop vieillir que jv passer en paramatre dans le component Button */}
       <Button vieillir ={() => this.handleClick(2)}/>
    </div>
  )
  }
}

export default App;
