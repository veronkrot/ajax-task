import axios from "axios";

const PERSON_DATA_URL = 'https://swapi.dev/api/people/';
const IMG_URL = 'https://starwars-visualguide.com/assets/img/characters/';

const getPersonImgUrl = (id) => {
    return `${IMG_URL + id}.jpg`;
}

class SwService {
    getPerson(id) {
        return axios.get(PERSON_DATA_URL + id)
            .then(res => {
            let person = res.data;
            person.img = getPersonImgUrl(id);
            return person;
        })
            .catch((err) => console.log(err));
    }
}

export const swService = new SwService();