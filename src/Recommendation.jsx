import React, { Component } from 'react'
import {connect} from 'react-redux'

class Recommendation extends Component {
    componentDidMount(){
        
    }
    

        
    
    render() {
        return (
            <ul>
                {this.props.reduxState.recommendations.recommendations && Object.keys(this.props.reduxState.recommendations.recommendations).map(recommendation=>(
                    <li key={recommendation}>
                        {recommendation}
                    </li>
                ))}
            </ul>
            // <p>recommendations</p>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Recommendation)