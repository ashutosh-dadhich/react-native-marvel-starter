import _ from 'lodash';

const marvel = (state = {}, action) => {

  const nextState = _.merge({}, state);

  switch (action.type) {
    case 'GET_CHARACTERS_SUCCESS': {
      nextState.characters = action.characters;
      return nextState;
    }
    case 'UPDATE_SEARCH': {
      console.log(action.name);
      nextState.searchText = action.name;
      return nextState;
    }
    
    default:
      return nextState;
  }
}

export default marvel
