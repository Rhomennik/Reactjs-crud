import React, { Component } from 'react';
import ArrayMsg from './item'
import axios from 'axios';

export default class TodosList extends Component {

    state = {listenMessage: [{}]};
             

    componentDidMount = () => {
        axios.get('http://localhost:3001/message/desde/0')
        .then(response => {
            this.setState({ listenMessage: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
        console.log(this.msgList());
    }
    msgList = () => {
        return this.state.listenMessage.map(function(currentListenMessage, i, ){
            return <ArrayMsg listenMessage={currentListenMessage} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Mensagem lista</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Msg</th>
                            <th>Opcoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.msgList() }
                    </tbody>
                </table>
            </div>
        )
    }
}