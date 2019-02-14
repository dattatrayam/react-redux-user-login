import { userActionConstants } from '../constants';

export function search(state = {}, action) {
  switch (action.type) {
    case userActionConstants.SEARCH_REQUEST:
      return {
        loading: true
      };
    case userActionConstants.SEARCH_SUCCESS:
      return {
		    users: action.users
      };
    case userActionConstants.SEARCH_FAILURE:
      return { 
        error: action.error
      };
     default:
      return state
  }
}