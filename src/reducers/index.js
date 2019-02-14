import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { search } from './search.reducer';


const rootReducer = combineReducers({
  authentication,
  search
});

export default rootReducer;