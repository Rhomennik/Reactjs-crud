import React from 'react'

const Jogos = ({ listPart }) => (
    <div className="cardwidth">
    <h5 className="title">Partidos</h5>
    <div className="card width" >
        {listPart}
        </div>
     </div> 
)

export default Jogos