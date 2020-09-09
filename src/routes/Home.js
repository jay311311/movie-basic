import React from 'react';
import axios from "axios";
import Movie from"../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state={
    isLoading:true,
    movies:[]
  }
  getMovies = async()=>{
    const {data:{data:{movies}}} = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading : false})
    //원래는 {movie:movie}이지만 es6를 통해 축약가능, 하나는 state의 movies, 하나는 가져온 데이터에서 movies
  }
  // axios는 항상 빠르지 X=> 그래서 getMovies 에게 기다리라고(async) 하고 axios에게 뭘 기다리는 지 말함(await)
  componentDidMount(){
    this.getMovies()  
    
  }
  render(){
    const {isLoading, movies } = this.state;
      return(
        <section className="container">
            {isLoading?(
              <div className="loader">
                  <span className="loading_text">Loading...</span>
              </div>
            ):(
              <div className="movies">
                {movies.map(movie => (
                    <Movie 
                        key={movie.id}
                        id={movie.id} 
                        year={movie.year} 
                        title={movie.title} 
                        summary={movie.summary} 
                        poster={movie.medium_cover_image} 
                        genres={movie.genres}
                        runtime={movie.runtime }
                      />
                    )
                  )
                }
              </div>
                    )}
          
        </section>
      )
  }
}

export default Home