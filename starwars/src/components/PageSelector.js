import React from 'react';

export default function PageSelector(props) {

    return (
        <div>
            <button className="prev" onClick={props.prev}>Previous</button>
            <button className="next" onClick={props.next}>Next</button>
        </div>
    )
}