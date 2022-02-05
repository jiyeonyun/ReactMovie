import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../style.css";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/navbar";

function Header(props){
    return(
        <nav className='header'>
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
                                    <Link to={`/page/${Group_obj[key]}`}>{key}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='searchBar'>
              <form>
                <input placeholder='Search Movie!'></input>
                <button><FontAwesomeIcon icon={faSearch} className="search"/></button>
              </form>
            </div>
          </nav>
    )
}

export default Header;