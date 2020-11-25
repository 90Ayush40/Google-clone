import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from "./response";
import { Link } from 'react-router-dom';
import Search from './Search';
import * as FaIcons from 'react-icons/fa';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // const { data } = useGoogleSearch(term);

    const data = Response;

    console.log(data);

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <FaIcons.FaSearch />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <FaIcons.FaNewspaper />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <FaIcons.FaImages />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <FaIcons.FaShoppingCart />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <FaIcons.FaMapSigns />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <FaIcons.FaVideoSlash />
                                <Link to='/videos'>Videos</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                            {item.displayLink} 
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                            
                            </div>
                    ))}
                </div>
           )}
        </div>
    )
}

export default SearchPage
