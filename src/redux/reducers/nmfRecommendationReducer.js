const nmfRecommendationReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_NMF_RECOMMENDATIONS':
            return action.payload;
        default:
            return state
    }
}


export default nmfRecommendationReducer;