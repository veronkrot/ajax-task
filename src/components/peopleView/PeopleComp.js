import React, {useEffect, useState} from 'react';
import {swService} from "../services/sw-service";

export const PeopleComp = () => {
    const [person, setPerson] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        btnHandlerClick();
    }, [setPerson]);

    let setData = (id) => {
        swService.getPerson(id).then(person => {
            setPerson(person);
        });
    }

    const btnHandlerClick = () => {
        setId(id+1);
        setData(id);
    }

    return(
        <div>
            <button onClick={btnHandlerClick}>NEXT</button>
            <div>
            <img src={person.img}/>
            <h3>{person.name}</h3>
            <ul>
                <li>{person.gender}</li>
                <li>{person.birth_year}</li>
                <li>{person.eye_color}</li>
            </ul>
            </div>
            </div>
    )
}
