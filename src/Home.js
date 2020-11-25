import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import Search from "./Search";


function Home() {
    return (
        <div className="home">
            {/* Home header */}
            <div className="home__header">

                {/* header left */}

                <div className="home__headerLeft">

                    {/* Link 1 */}
                    <Link to="/about">
                        About
                    </Link>

                    {/* Link 2 */}

                    <Link to="/store">
                        Store
                    </Link>
                </div>
                {/* header right */}

                <div className="home__headerRight">

                    {/* Link 1 */}
                    <Link to='/gmail'>Gmail</Link>

                    {/* Link 3 */}

                    <Link to='/images'>Images</Link>

                    {/* Icons 2 */}

                    {/* Grid Icons */}

                    <FaIcons.FaBars className='home__icons' />

                    {/* People Circle */}

                    <FaIcons.FaUserCircle />

                </div>
            </div>

            {/* Home Body */}
            <div className="home__body">

                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                <div className="home__inputContainer">
                    {/* Search */}
                    <Search />

                </div>

            </div>
        </div>
    )
}

export default Home
