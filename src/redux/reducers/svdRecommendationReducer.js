const svdRecommendationReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_SVD_RECOMMENDATIONS':
            return action.payload;
        default:
            return state
    }
}


export default svdRecommendationReducer;