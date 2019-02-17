import React from 'react';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
    render() {
        const { users} = this.props;
        return (
            <div> 
            {
                users && 
                <div className="searchContainer">
                <div className="searchContainer-body">
                <p> SearchResult </p>
                </div>
                </div>
            }
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { users } = state.search;
    return {
       users
    };
}

const connectedSearchResult = connect(mapStateToProps)(SearchResult);
export { connectedSearchResult as SearchResult };
