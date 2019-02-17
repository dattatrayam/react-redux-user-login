import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import './login.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(userActions.logout());
        this.state = {
            username: '',
            credential: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, credential } = this.state;
        const { dispatch } = this.props;
        if (username && credential) {
            dispatch(userActions.login(username, credential));
        }
    }

    render() {
        const { loggingIn, loggedIn, error } = this.props;
        const { username, credential, submitted } = this.state;
        return (
            <div className="container">
            <div className="container-body">
                <h2 className="center">Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'center form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'center form-group' + (submitted && !credential ? ' has-error' : '')}>
                        <input type="password" className="form-control" name="credential" value={credential} onChange={this.handleChange} />
                        {submitted && !credential &&
                            <div className="help-block">Credential is required</div>
                        }
                    </div>
                    <div className="rightalign form-group">
                        <button className="btn btn-primary loginButton">Login</button>
                        {loggingIn && <div>loading...</div>
                        }
                    </div>
                    <div className={'center ' + (!loggedIn && error ? ' operationError' : '')}>
                        {!loggedIn && error &&
                            <div className="help-block">{error}</div>
                        }
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn, error } = state.authentication;
    return {
        loggingIn, loggedIn, error
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 