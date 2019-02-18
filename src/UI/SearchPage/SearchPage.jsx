import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { SearchComponent } from './SearchComponent';
import { SearchResult } from './SearchResult';
import './searchpage.css';

class SearchPage extends React.Component {
    render() {
        return (
            <div className="searchPage">
                 <p className="rightalign">
                    <Link to="/login">Logout</Link>
                </p>
                <SearchComponent />
                <SearchResult /> 
           </div>
        );
    }
}
export { SearchPage };

