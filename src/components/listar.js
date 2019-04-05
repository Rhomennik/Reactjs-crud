import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArrayMsg = props => (
    <tr>
        <td>{props.listenMessage.fullmessage}</td>
        <td>
            <Link to={"/edit/"+props.listenMessage._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor() {
        super();
        this.state = {listenMessage: []}
        this.componentDidMount()
    }

    componentDidMount() {
        axios.get('http://localhost:3001/message/desde/0')
            .then(response => {
                this.setState({ listenMessage: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    msgList() {
        return this.state.listenMessage.map(function(currentTodo, i){
            return <ArrayMsg listenMessage={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
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