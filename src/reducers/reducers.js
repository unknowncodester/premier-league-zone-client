import {combineReducers} from 'redux';

const league = (state = [], action) => {
   if(action.type === 'GET_LEAGUE'){
       return action.payload;
   }
   return state;
}

const teams = (state = [], action) => {

    console.log()
    if(action.type === 'GET_TEAMS'){
        return [
            {'name':'Arsenal'}
        ];
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
    posts
});

export default appReducers;
