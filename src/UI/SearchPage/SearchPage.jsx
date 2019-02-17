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
                <SearchComponent />
                <SearchResult /> 
           </div>
        );
    }
}
export { SearchPage };

