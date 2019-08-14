import React, {Component} from 'react'
import { connect } from 'react-redux'


class Form extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIE_LIST' })
    }
    render(){
        return(
            <p>form here</p>
        )
    }
}

export default connect()(Form)