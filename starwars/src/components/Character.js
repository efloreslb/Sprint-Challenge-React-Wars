import React from 'react';

export default function Character(props) {

    return (
        <div className="charContainer">
            <div className="charImg">
                m
            </div>
            <div className="charInfo">
                <h2>{props.character.name}</h2>
                <p><strong>Gender:</strong> {props.character.gender}</p>
                <p><strong>Height: </strong>{props.character.height}</p>
                <p><strong>Mass:</strong> {props.character.mass}</p>
                <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            </div>
        </div>
    )
}