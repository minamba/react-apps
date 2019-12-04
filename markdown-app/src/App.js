import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'
import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text : sampleText
  }


////////PARTIE QUI SERT A FAIR DES SAUVAGARDE DANS LOCAL STORAGE (on les utilisent dans les components statefull)

  //permet de recuperer des infos enregistré sur le local storage
  componentDidMount () {
     const text = localStorage.getItem('text')

     if(text)
      this.setState({text})
     else
      this.setState({text: sampleText})
  }

  //enregistrement des modifications dans le local storage
  componentDidUpdate (){
    const {text} = this.state //la variable text est en destructuré, dans mon state, j'aurais pu avoir dans variable et dans ce cas, j'aurais pu les mettre => {var1, var2} = this.state
    localStorage.setItem('text', text);
  }

  /////////////////////////////////////////////////

  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }

renderText = text => {
  const __html = marked(text, {sanitize: true})
  return {__html}
}

  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <textarea className='from-control' rows='35' value={this.state.text} onChange={this.handleChange}></textarea>          
        </div>
        <div className="col-lg-6">
          <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
        </div>
      </div>
    </div>
  )
  }
  
}

export default App;
