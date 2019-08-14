const movieListReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_MOVIE_LIST':
            return action.payload;
        default:
            return state
    }
}



export default movieListReducer;
