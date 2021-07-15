import React from 'react';
import Navigation from '../layout/Navigation';
import Navigation2 from '../layout/Navigation2';

const Search = () => {
    return (
        <div>
            <Navigation />
            <Navigation2 />
            <div className="container">
                <h2>Este es el componente del Buscador</h2>
            </div>
        </div>
    )
}

export default Search;