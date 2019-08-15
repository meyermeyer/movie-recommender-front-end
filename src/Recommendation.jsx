import React, { Component } from 'react'
import {connect} from 'react-redux'

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

                <ul>
                    {this.props.reduxState.recommendations.recommendations &&
                        Object.keys(this.props.reduxState.recommendations.recommendations).map(recommendation => (
                            <li key={recommendation}>
                                {recommendation}
                            </li>

                        ))
                    }
                </ul>
            )
        }
        
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Recommendation)