import React from "react";
import getHeroeByPublisher from "../../selectos/getHeroeByPublisher";
import HeroCard from "./HeroCard";

const HeroeList = ({publisher}) => {
    const heroes = getHeroeByPublisher(publisher);

    return(
        <div className="card-columns">
            {
                heroes.map(heroe => <HeroCard key={heroe.id} {...heroe}/>  )
            }
        </div>
    );
}

export default HeroeList;