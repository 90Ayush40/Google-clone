import React, { useState } from 'react';
import './Search.css';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {

    const[{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log("You hit the search", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // do something with input

        history.push('/search');

    }
    return (
        <form className='search'>
            <div className='search__input'>
                <FaIcons.FaSearch className='search__inputIcons' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <FaIcons.FaMicrophone />

            </div>

            {!hideButtons ? (  <div className='search__buttons'>
                <button type='submit' onClick={search}>BREAK IT</button>
                <button variant='outlined'>I'm Feeling Lucky</button>
            </div>): (
                <div className='search__buttons search__buttonsHidden'>
                <button type='submit' onClick={search}>BREAK IT</button>
                <button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</button>
            </div>
            )}
           
        </form>
    )
}

export default Search
