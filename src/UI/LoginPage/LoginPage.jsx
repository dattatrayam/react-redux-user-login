import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

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
        const { loggingIn } = this.props;
        const { username, credential, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !credential ? ' has-error' : '')}>
                        <input type="password" className="form-control" name="credential" value={credential} onChange={this.handleChange} />
                        {submitted && !credential &&
                            <div className="help-block">Credential is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 