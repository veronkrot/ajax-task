import axios from "axios";
import {
    getFullImgUrl,
    PERSON_DATA_URL,
    PLANET_DATA_URL,
    RESOURCE_TYPE,
    STARSHIP_DATA_URL
} from "../configs/pagesConfig";

const getData = (id, url, resource) => {
    return axios.get(url + id)
        .then(res => {
            let obj = res.data;
            obj.img = getFullImgUrl(id, resource);
            return obj;
        }).catch((e) => {
            e.errored = true;
            return e;
        });
}

class SwService {
    getPerson(id) {
        return getData(id, PERSON_DATA_URL, RESOURCE_TYPE.characters);
    }

    getPlanet(id) {
        return getData(id, PLANET_DATA_URL, RESOURCE_TYPE.planets);
    }

    getStarship(id) {
        return getData(id, STARSHIP_DATA_URL, RESOURCE_TYPE.starships);
    }
}

export const swService = new SwService();