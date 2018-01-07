import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { selectBook } from '../actions/index';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                    <li key={book.title} className="list-group-item">{book.title}</li>
                );
            });       
        }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whatever is returned will show up as props inside the booklist
    return {
        books : state.books
    }
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //whenever a book is selected, selectBook is called and the result should be passed to all the reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch)
}
//promote BookList from component to container - it needs to know about this new 
//dispatch method, selectBook. Make it available as a prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList)


