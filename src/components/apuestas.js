import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const ArrayList = props => (
    <div className="card-body">
            <h5 className="card-title">Apuestas</h5>
            <p className="card-text">{props.equipos}</p>
            <a href="#" className="btn btn-primary" >{props.a}</a> 
            <a href="#" className="btn btn-primary" >{props.b}</a>
        </div>
)

class apuestas
 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Partidos: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/apostas/desde/0')
            .then((resp) => {

                this.setState({Partidos: resp.data});
                console.log('Partidos', this.state.Partidos);
            })
    }

    listPart() {
        return this.state.Partidos.map(function(currentList, i) {
            return <ArrayList Partidos={currentList} key={i} />;
        })
    }

    render() { 
        return ( 
        <div className="card width: 18rem;" >
            {this.listPart()}
         </div> );
    }
}
 
export default apuestas;