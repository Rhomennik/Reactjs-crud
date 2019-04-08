import React from 'react';
import { Link } from 'react-router-dom';

const ArrayMsg = (props, urgency) => (
    <tr>
        <td className={props.listenMessage.messageprioridade === 'Importante' ? 'text-danger' : ''}>{props.listenMessage.fullmessage}</td>
        <td>
            <Link to={"/edit/"+props.listenMessage._id}>Edit</Link>
        </td>
    </tr>
)

export default ArrayMsg