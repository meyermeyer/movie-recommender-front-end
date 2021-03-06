import React, {Component} from 'react'
import { connect } from 'react-redux'

import Downshift from './Downshift'


class Form extends Component {

    componentDidMount() {
        //load list of all movies for autocomplete
        this.props.dispatch({ type: 'FETCH_MOVIE_LIST' })
    }


    render(){
        return(
            <>
                <h3>Enter a movie title to see recommendations</h3>
                <Downshift store={this.props.reduxState.movieList} dispatch={this.props.dispatch}/>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Form)