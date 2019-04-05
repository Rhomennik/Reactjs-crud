import React, { Component } from 'react';
import axios from 'axios';


export default class Editar extends Component {
    constructor(){
        super();
        this.state = {
            fullmessage: ''
        }
    }

componentDidMount() {
    console.log('pegando parametro da url: teste?',this.props.match.params.id );
        axios.get('http://localhost:3001/message/'+this.props.match.params.id)
        .then(response => {
                this.setState({
                    fullmessage: response.data.message.fullmessage
                })
            })
        .catch(function(error) {
            console.log(error);
        })
}


onChangeFullmessage = (e) =>{
        this.setState({
            fullmessage: e.target.value
        })
}

onSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
        fullmessage: this.state.fullmessage
    };
    console.log('msgObj, OkTrue', msgObj);

    axios.put('http://localhost:3001/message/'+this.props.match.params.id, msgObj)
        .then(resp => console.log('okTrue', resp.data));
    // if oktrue : Ser redirecionado usando props.hitory
        this.props.history.push('/');
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
                    <input type="submit" value="Editar" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}