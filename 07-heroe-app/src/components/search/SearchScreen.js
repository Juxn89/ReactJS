import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { useForm as UseForm } from '../hooks/useForm';
import queryString from 'query-string';
import getHeroeByName from '../../selectos/getHeroeByName';

const SearchScreen = ({history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = UseForm({ searchText: q });
    const {searchText} = values;

    const heroesFiltered = useMemo( () => getHeroeByName(q), [q]);
    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return(
        <>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input placeholder="Find your heroe" type="text" className="form-control" name="searchText" onChange={ handleInputChange } value={ searchText } autoComplete="off"/>
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {( (q === '') && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    )}
                    {( (q !== '' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    )}
                    {
                        heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero}/>)
                    }
                </div>
            </div>
        </>
    )
};

export default SearchScreen;