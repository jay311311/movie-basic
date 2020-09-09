import React from "react";
import {Link} from "react-router-dom";
//Link가 아닌 html의 a태그로 감싸버리면 React가 죽고 강제로 새로고침된다
function Navigation (){
    return (
        <div>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    )
}
//Link 를 사용한다면 Navigation Component를 router안에 넣어야 한다!!!
export default Navigation