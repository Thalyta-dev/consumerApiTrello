import React from 'react'
import { Api } from './api'
import './form.css'
import './colorButton.css'


class forms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      card: '',
      text: '',
      checkbox: "i",
      option:0,
      tags:[],
      control:[],
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTags = this.handleTags.bind(this)
    this.control = this.control.bind(this);

  }


  handleChange = (eve) => {

    this.setState({ nome: eve.target.value });



  }
  handlecard = (eve) => {

    this.setState({ card: eve.target.value });


  }
  handleText = (eve) => {

    this.setState({ text: eve.target.value });
  


  }
  handleOption = (eve) => {
    this.setState({ option: eve.target.value });
  }


    handleCheckbox = (eve) => {
    if(this.state.checkbox == eve.target.value){
      this.setState({ checkbox: "i" })
    }else{
      this.setState({ checkbox: eve.target.value });
  
  }
    
  }

  handleSubmit = (eve) => {

    eve.preventDefault();
    if(this.state.checkbox =! "i" ){
      { Api(this.state.nome, this.state.card, this.state.text, this.state.option, this.state.checkbox, this.state.tags) }
    }else{
      alert("Por favor, preencha todos os campos")
    }
  }

  handleTags=(eve) => {
    console.log(this.state.control)
    this.setState(({tags}) => {
      tags.push(eve.target.value)
    }
    );
 
  }



   control=()=>{
     this.setState(({control}) => {

         control[0]= true
     })
  }
  render() {
//let actived = this.state.checkbox != "o" && this.state.checkbox != 0? true: false 
var button1 = this.state.control[0] == true? "buttonColor"  : "button1"
alert(button1)
  var checked =(eve)=> { 
    if( this.state.checkbox != "i" && this.state.checkbox != eve) 
    return true 
    
    else{
      return  false
    } 
  }

    return (
      < div class=" caixa">
        <div className="texto">
          Preencha as informações abaixo para criar uma board e um card no trello
        </div>
        <form onSubmit={this.handleSubmit} className="container">

          <div className="nameboard">
            <label for="nome quadro">Nome do quadro:
                <input type="text" class="nome" value={this.state.nome} onChange={this.handleChange} placeholder="Digite o nome do quadro" required></input>
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="checkbox"> Em qual lista deseja colocar:
              <div className="chek">
                <input type="checkbox" disabled={checked(0)} value={this.state.checkbox} onChange={this.handleCheckbox} name="a fazer" value="0" /> a fazer
                <input type="checkbox" disabled={checked(1)} value={this.state.checkbox} onChange={this.handleCheckbox} name="em andamento" value="1" /> em andamento
                <input type="checkbox" disabled={checked(2)}  value={this.state.checkbox}  onChange={this.handleCheckbox}  name="concluído" value="2" /> concluído
              </div>
            </label>
          </div>
          <div className="namecard">
            <label htmlFor="Nome do card"> Digite o nome do seu card:
                <input type="text" class="card" value={this.state.card} onChange={this.handlecard} placeholder="Digite o nome do seu card" required></input>
            </label>
          </div>
          <div className="position">
            <label for="OPÇÕES"> Em qual posicão deseja colocar </label>
            <select class="op" value={this.state.option} onChange={this.handleOption} name="position" id="position" >
              <option value="1">Opção 1</option>
              <option value="2"> Opção 2</option>
              <option value="3">Opção 3</option>
            </select>
          </div>
          <div className="text">
            <label htmlFor="mensagem">     Digite as informaçõe do seu card:
                <textarea class="textcaixa" size="300" value={this.state.text} onChange={this.handleText} placeholder="informações do card " required></textarea>
            </label>
          </div>
          <div className="tags">
            <label htmlFor="tags"> Tags:
            
              <div className="tag"> 
                <button type="button" onClick={this.control} value={this.state.tag} value="html"  class={button1}>html</button>
                <button type="button" value={this.state.tag} value="css" onClick={this.handleTags}  class={button1}>css</button>
                <button type="button" value={this.state.tag} value="javascript"  onClick={this.handleTags}  class="button3" >javascrip</button>
                <button type="button" value={this.state.tag} value="ruby" onClick={this.handleTags}  class="button4" >ruby</button>
                <button type="button" value={this.state.tag} value="C" onClick={this.handleTags} class="button5" >C</button>
                <button type="button" value={this.state.tag} value="java" onClick={this.handleTags}  class="button6" >java</button>
                <button type="button" value={this.state.tag} value="react" onClick={this.handleTags} class="button7" >react</button>
                <button type="button" value={this.state.tag} value="Jquery" onClick={this.handleTags} class="button8" >Jquery</button>
                <button type="button" value={this.state.tag} value="angular" onClick={this.handleTags}class="button9" >angular</button>
                <button type="button" value={this.state.tag} value="node.js" onClick={this.handleTags} class="button10" >node.js</button>
                <button type="button" value={this.state.tag} value="boostrap" onClick={this.handleTags} class="button11">bootstrap</button>
                <button type="button" value={this.state.tag} value="php" onClick={this.handleTags}class="button12" >php</button>
              </div>

            </label>


          </div>
          <div class="but">
            <input class="butinput" type="submit" value="gerar card" />
          </div>




        </form>

      </div>
    );
  }

}

export default forms