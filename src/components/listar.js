import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Listar extends Component {

    constructor() {
        super();
        this.state = {
            mensagens: []
        }
    }

    componentDidCatch(){
        axios.get('http://localhost:3001/message/desde/0')
        .then(response => {
            this.setState({ mensagens: response.fullmessage});
        })
        .catch(function(err){
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}