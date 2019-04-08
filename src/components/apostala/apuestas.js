import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import ArrayList from '../apostala/equipos';
class apuestas extends Component {

state = {partidos: [{}]}
   
    componentDidMount = () => {
        axios.get('http://localhost:3001/apostas/desde/0')
            .then((resp) => {
                this.setState({partidos: resp.data});
                console.log('partidos', this.state.partidos);
            })
    }

    listPart = () => {
        return this.state.partidos.map(function(currentList, i, onchangeA) {
            return <ArrayList partidos={currentList} key={i} onchangeA={(e)=> console.log(onchangeA)} />;
        })
    }

    render = () => { 
        return ( 
        <div className="cardwidth">
        <h5 className="title">Partidos</h5>
        <div className="card width" >
            {this.listPart()}
            </div>
         </div> );
    }
}
 
export default apuestas;