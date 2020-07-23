import React from 'react';
import axios from "axios"

class App extends React.Component {
  state={
    isLoading:true,
    movie:[]
  }
  getMovies = async()=>{
    const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json")
    console.log(movies)
  }
  // axios는 항상 빠르지 X=> 그래서 getMovies 에게 기다리라고(async) 하고 axios에게 뭘 기다리는 지 말함(await)
  componentDidMount(){
    this.getMovies()  
  }
  render(){
    const {isLoading} = this.state;
      return(
        <div>{isLoading?"loading":"fail"}</div>

      )
  }
}

export default App