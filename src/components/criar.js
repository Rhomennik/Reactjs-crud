import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullmessage: ''
        }
        this.onChangeFullmessage = this.onChangeFullmessage.bind(this);
    }

// Metodo submit do formulario
onSubmit = (e) => {
    e.preventDefault();

    console.log(`form fullmessage: ${this.state.fullmessage}`);

    const novaMensagem = {
        fullmessage: this.state.fullmessage
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
                <div className="form-group">
                    <input type="submit" value="Enviar" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}