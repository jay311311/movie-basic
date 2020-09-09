import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"

function App (){
 return( 
  <HashRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home} ></Route>
    {/*exact 는  path="/" 만 렌더링 한다는 뜻으로, exact={true}가 없으면 /가 적힌 모든 컴포넌트랑 같이 렌더링 됨*/ }
    <Route path="/about" component={About} ></Route>
  </HashRouter>
 )
}

export default App