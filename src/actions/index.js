export function selectBook(book){
    //This is an actioncreator, it returns an action. An action is an object with type and payload
    //
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}