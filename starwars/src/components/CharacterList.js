import React from 'react';
import Character from './Character';

export default function CharacterList(props){

    return (
        <div className="charList"> 
            {props.starwarsChars.map(character => (
                <Character 
                    character={character}
                    key={character.name}
                />
            ))}
        </div>
    )
}
