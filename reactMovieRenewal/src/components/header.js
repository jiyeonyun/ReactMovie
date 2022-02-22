import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Header(props){
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(true); 
    function handleScroll() { 
        if(ScrollY > 20) {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        }
    }
    useEffect(() => {
        function scrollListener() {  window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll); }; //  window 에서 스크롤을 감시를 종료
    });
    return(
        <nav className={ScrollActive ? "header" : "headerChange"}>
            {/*  Page Name */}
            <h1 className='header_h1'>
                <Link to={"/"} >YUNFLEX</Link>
            </h1>
            {/* Group Links */}
            <div className = "nav_menu">
                {
                    Group_key_arr.map((key) => {
                        return (
                            <div key={key}>
                                <div className='nav_menus'>
                                    <Link to={`/page/${Group_obj[key]}/1`}>{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </nav>
    )
}

export default Header;