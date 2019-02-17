import React from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../../actions';
import './searchpage.css'

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { searchText } = this.state;
        const { dispatch } = this.props;
        if (searchText) {
            dispatch(searchActions.search(searchText));
        }
    }

    render() {
        const { loading, error } = this.props;
        const { searchText, submitted } = this.state;
        return (
            <div className="searchContainer">
            <div className="searchContainer-body">
                <h2 className="leftalign">Search User</h2>
                <form name="form" onSubmit={this.handleSearch}>
                    <div className="rows">
                    <div className={'row leftalign form-group' + (submitted && !searchText ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="searchText" value={searchText} onChange={this.handleChange} />
                        {submitted && !searchText &&
                            <p className="help-block">Search Text is required</p>
                        }
                    </div>
                    <div className="row rightalign form-group">
                        <button className="btn btn-primary searchButton">Search</button>
                        {loading && <p>loading...</p>
                        }
                     </div>
                     </div>
                       <div className={'center ' + (error ? ' operationError' : '')}>
                        { error &&
                            <p className="help-block">{error}</p>
                        }
                    </div>
                   
                </form>
            </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { loading, error } = state.search;
    return {
        loading, error
    };
}

const connectedSearchComponent = connect(mapStateToProps)(SearchComponent);
export { connectedSearchComponent as SearchComponent };