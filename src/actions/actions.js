import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';
const newsApiUrl = 'https://newsapi.org/v1/articles?source=four-four-two&sortBy=top&apiKey=6ab5b946b1db4f57b604aad4bde82faf';

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

export async function getTeam(id) {
    let response = await axios.get(apiUrl + 'teams/' + id);

    return {
        type: 'GET_TEAM',
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

export async function getNews() {
    let response = await axios.get(newsApiUrl);

    return {
        type: 'GET_NEWS',
        payload: response.data.articles
    }
}




