import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary,poster}) {
    return(
        <h4>
            {title}
        </h4>
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




