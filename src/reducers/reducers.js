import {combineReducers} from 'redux';

const league = (state = [], action) => {
   if(action.type === 'GET_LEAGUE'){
       return action.payload;
   }
   return state;
}

const news = (state = [], action) => {
    if(action.type === 'GET_NEWS'){
        return action.payload;
    }
    return state;
}

const teams = (state = [], action) => {

    if(action.type === 'GET_TEAMS'){
        return action.payload;
    }
    return state;
}

const team = (state = [], action) => {

    if(action.type === 'GET_TEAM'){
        return action.payload;
    }
    return state;
}

const posts = (state = [], action) => {
    if(action.type === 'GET_POSTS'){
        return action.payload;
    }
    return state;
}

const matches = (state = [], action) => {
    if(action.type === 'GET_MATCHES'){
        return action.payload;
    }
    return state;
}

const topics = (state = [], action) => {
    if(action.type === 'GET_TOPICS'){
        return action.payload;
    }
    return state;
}

const appReducers = combineReducers({
    league,
    matches,
    topics,
    teams,
    team,
    posts,
    news
});

export default appReducers;
