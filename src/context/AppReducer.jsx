export default (state, action) => {
    switch (action.type) {

        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })

            }

        case 'ADD_USER':
            
            return {
                ...state,
                users: [action.payload, ...state.users]

            }

        case 'EDIT_USER':
            const updatedUser = action.payload;
            const updateUsers = state.users.map(user => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            })
            return {
                users: updateUsers

            };
        case "REMOVE_BOOK":
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        case "ADD_BOOK":
            return {
                ...state,
                books: [action.payload, ...state.books],
            };
        case "EDIT_BOOK":
            return {
                ...state,
                books: state.books.map((book) =>
                    book.id === action.payload.id ? action.payload : book
                ),
            };



        default:
            return state
    }
}