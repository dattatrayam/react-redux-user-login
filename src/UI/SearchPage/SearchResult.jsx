import React from 'react';
import { connect } from 'react-redux';
import { TablePagination } from 'react-pagination-table';


class SearchResult extends React.Component {
    render() {
        const { users} = this.props;
        const Header = ["User Name", "Name", "Status" ];
        return (
            <div> 
            {
                users && 
                <div className="searchContainer">
                <div className="searchResult-body">
                <TablePagination
                    title="Search Result for Test"
                    subTitle="Users"
                    headers={ Header }
                    data={ users }
                    columns="username.displayName.status"
                    perPageItemCount={ 5 }
                    totalCount={ users.length }
                    arrayOption={ [["size", 'all', ' ']] }
                />
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
