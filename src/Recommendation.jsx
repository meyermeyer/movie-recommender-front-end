import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Grid} from '@material-ui/core'

class Recommendation extends Component {
    componentDidMount(){
        
    }

    
    render() {

        if (this.props.reduxState.recommendations.recommendations === 'none'){
            return (
                <p>Looks like we don't have enough data yet to make a recommendation for that film.  Try other title!</p>
            )
        }
        else {
            return (
                <Grid container>
                    <Grid item xs={3}>
                        <ol>
                            {this.props.reduxState.recommendations.recommendations &&
                                Object.keys(this.props.reduxState.recommendations.recommendations).map(recommendation => ( 
                                    <li key={recommendation}>
                                        {recommendation}
                                    </li>
                                ))
                            }
                        </ol>
                    </Grid>
                    <Grid item xs={3}>
                        <ol>
                            {this.props.reduxState.svdRecommendations.recommendations && 
                                Object.values(this.props.reduxState.svdRecommendations['recommendations']).map(recommendation => {
                                    console.log('map recommendations', recommendation);
                                    return(
                                        <li key={recommendation.movieId}>
                                            {recommendation.title}
                                        </li>
                                    )
                                    
                                })} 
                        </ol>
                    </Grid>
                    <Grid item xs={3}>
                        <ol>
                            {this.props.reduxState.nmfRecommendations.recommendations &&
                                Object.values(this.props.reduxState.nmfRecommendations['recommendations']).map(recommendation => {
                                    return (
                                        <li key={recommendation.movieId}>
                                            {recommendation.title}
                                        </li>
                                    )
                                })}
                        </ol>
                    </Grid>
                </Grid>
                
            )
        }
        
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Recommendation)