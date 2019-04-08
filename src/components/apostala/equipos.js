import React from "react";

const ArrayList = (props, onChangeA) => (
    <div className="card-body">
            <p className="card-text">{props.partidos.equipos}</p>
            <button className="btn btn-primary" onChange={(e) => onChangeA} >{props.partidos.a}</button>
            <button className="btn btn-primary">{props.partidos.b}</button>
            <div className="card width">
            </div>
        </div>
)

export default ArrayList

