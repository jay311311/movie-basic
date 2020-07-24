import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary,poster}) {
    return(
        <div class="movie">
            <img src={poster} alt={title} title={title} ></img>
            <div class="movie_data">
                <h3 class="movie_title">{title}</h3>
                <h5 class="movie_year">{year}</h5>
                <p class="movie_summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
    //데이터 key 는 medium_cover_image라고 되어 있음, props를 가져올때 poster로 지정됨
}

//부모의 state
export default Movie;




