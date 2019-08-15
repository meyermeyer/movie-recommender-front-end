const recommendationReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_RECOMMENDATIONS':
            return action.payload;
        default:
            return state
    }
}


export default recommendationReducer;