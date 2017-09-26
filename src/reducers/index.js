import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

export function getLeague() {

    let league = axios.get(apiUrl + 'league')
        .then(response => { return response.data.data });

    return {
        type: 'GET_LEAGUE',
        league
    }
}

export function getTeams() {
    let teams = axios.get(apiUrl + 'teams')
        .then(response => { return response.data.data })

    return {
        type: 'GET_TEAMS',
        teams
    }
}

export function getTopics() {
    let topics = axios.get(apiUrl + 'topics')
        .then(response => { return response.data.data });

    return {
        type: 'GET_TOPICS',
        topics
    }
}

export function getPosts() {
    let posts = axios.get(apiUrl + 'posts')
        .then(response => { return response.data.data });

    return {
        type: 'GET_TOPICS',
        posts
    }
}

export function getMatches() {
    let matches = axios.get(apiUrl + 'matches')
        .then(response => { return response.data.data });

    return {
        type: 'GET_MATCHES',
        matches
    }
}




