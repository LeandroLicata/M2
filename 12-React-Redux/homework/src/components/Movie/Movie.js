import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <>
            <div className="movie-detail">
                Detalle de la película  
            </div>
            <div>
                <h2>Título: {this.props.movieDetail.Title}</h2>
                <img src={this.props.movieDetail.Poster} alt=''/>
                <h2>Año: {this.props.movieDetail.Year}</h2>
                <h2>Plot: {this.props.movieDetail.Plot}</h2>
            </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);