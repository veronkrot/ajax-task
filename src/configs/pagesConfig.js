import {swService} from "../services/sw-service";
export const characterProps = {
    maxElements: 82,
    fieldsToDisplay: [
        {
            key: 'gender',
            text: 'Gender'
        },
        {
            key: 'birth_year',
            text: 'Birth Year'
        },
        {
            key: 'eye_color',
            text: 'Eye Color'
        }
    ],
    dataFunc: swService.getPerson
};

export const planetProps = {
    maxElements: 60,
    fieldsToDisplay: [
        {
            key: 'rotation_period',
            text: 'Rotation period'
        },
        {
            key: 'orbital_period',
            text: 'Orbital period'
        },
        {
            key: 'diameter',
            text: 'Diameter'
        }
    ],
    dataFunc: swService.getPlanet
};

export const starshipProps = {
    maxElements: 36,
    fieldsToDisplay: [
        {
            key: 'model',
            text: 'Model'
        },
        {
            key: 'consumables',
            text: 'Consumables'
        },
        {
            key: 'crew',
            text: 'Crew'
        }
    ],
    dataFunc: swService.getStarship
};

export const RESOURCE_TYPE = {
    characters: 'characters',
    planets: 'planets',
    starships: 'starships',
}

export const PERSON_DATA_URL = 'https://swapi.dev/api/people/';
export const PLANET_DATA_URL = 'https://swapi.dev/api/planets/';
export const STARSHIP_DATA_URL = 'https://swapi.dev/api/starships/';
export const BASE_IMAGES_URL = 'https://starwars-visualguide.com/assets/img/';
export const NO_IMG_URL = `${BASE_IMAGES_URL}big-placeholder.jpg`;

export const getFullImgUrl = (id, path) => {
    return `${BASE_IMAGES_URL + path}/${id}.jpg`;
}