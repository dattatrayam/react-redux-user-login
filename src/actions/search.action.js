
import { userActionConstants } from '../constants';
import { userService } from '../services';

export const searchActions = {
    search    
};
function search() {
    return dispatch => {
        dispatch(request());

        userService.search()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userActionConstants.SEARCH_REQUEST } }
    function success(users) { return { type: userActionConstants.SEARCH_SUCCESS, users } }
    function failure(error) { return { type: userActionConstants.SEARCH_FAILURE, error } }
}
