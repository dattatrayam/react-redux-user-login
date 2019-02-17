
import { userActionConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: userActionConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userActionConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userActionConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userActionConstants.LOGOUT };
}