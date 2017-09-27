import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

export async function getLeague() {

    let response = await axios.get(apiUrl + 'league');

    return {
        type: 'GET_LEAGUE',
        payload: response.data.data
    }
}

export async function getTeams() {
    let response = await axios.get(apiUrl + 'teams');

    return {
        type: 'GET_TEAMS',
        payload: response.data.data
    }
}

export async function getTopics() {
    let response = await axios.get(apiUrl + 'topics');

    return {
        type: 'GET_TOPICS',
        payload: response.data.data
    }
}

export async function getPosts() {
    let response = await axios.get(apiUrl + 'posts');

    return {
        type: 'GET_POSTS',
        payload: response.data.data
    }
}

export async function getMatches() {
    let response = await axios.get(apiUrl + 'matches');

    return {
        type: 'GET_MATCHES',
        payload: response.data.data
    }
}




