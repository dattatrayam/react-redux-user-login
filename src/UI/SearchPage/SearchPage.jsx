import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchActions } from '../../actions';

class SearchPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(searchActions.search());
    }

    render() {
        const { user, search } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {search.loading && <em>Loading users...</em>}
                {search.error && <span className="text-danger">ERROR: {search.error}</span>}
                {search.users &&
                    <ul>
                        {search.users.map((user, index) =>
                            <li key={user.id}>
                                {user.username + ' ' + user.name}
                                {
                                  
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { search, authentication } = state;
    const { user } = authentication;
    return {
        user,
        search
    };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage };