import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props){
        super(props);

        this.onChangePrioridade = this.onChangePrioridade = this.onChangePrioridade.bind(this);
        this.onChangeFullmessage = this.onChangeFullmessage.bind(this);

        this.state = {
            fullmessage: '',
            messageprioridade: ''
        }
    }

// Metodo submit do formulario
onSubmit = (e) => {
    e.preventDefault();

    console.log(`form fullmessage: ${this.state.messageprioridade}`);

    const novaMensagem = {
        fullmessage: this.state.fullmessage,
        messageprioridade: this.state.messageprioridade
    };

    axios.post('http://localhost:3001/message/', novaMensagem)
            .then(res => console.log(res.data))
    this.setState({
        fullmessage: ''
    })
    this.props.history.push('/');

}

// Metodo para ser atualizado o estado objeto fullmessage (PUT)
onChangeFullmessage(e) {
    this.setState({
        fullmessage: e.target.value
    })
}
onChangePrioridade = (e) => {
    this.setState({
        messageprioridade: e.target.value
    })
    console.log('aa', this.state.messageprioridade, e.target.value)
}

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Mandar novas mensagens</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Mensagem: </label>

                    <input type="text"
                            className="form-control"
                            value={this.state.fullmessage}
                            onChange={this.onChangeFullmessage}
                            />
                </div>
                <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="prioridadeOptions" 
                                    id="prioridadeImportante" 
                                    value="Importante" 
                                    checked={this.state.messageprioridade === 'Importante'} 
                                    onChange={this.onChangePrioridade}
                                    />
                                    <label className="form-check-label">Importante</label>
                                    </div>
                
                <div className="form-group">
                    <input type="submit" value="Enviar" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}