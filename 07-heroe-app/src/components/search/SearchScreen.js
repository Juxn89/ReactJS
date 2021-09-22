import React from 'react';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import { useForm as UseForm } from '../hooks/useForm';

const SearchScreen = () => {
    const heroesFiltered = heroes;
    const [values, handleInputChange] = UseForm({searchText: ''});

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(values)
        const {searchText} = values;
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
                        <input placeholder="Find your heroe" type="text" className="form-control" name="searchText" onClick={handleInputChange} autoComplete="off"/>
                        <button type="buttton" className="btn m-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero}/>)
                    }
                </div>
            </div>
        </>
    )
};

export default SearchScreen;