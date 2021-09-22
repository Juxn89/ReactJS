import React, { useMemo } from "react";
import getHeroeByPublisher from "../../selectos/getHeroeByPublisher";
import HeroCard from "./HeroCard";

const HeroeList = ({publisher}) => {
    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

    return(
        <div className="card-columns animate__fadeInLeft">
            {
                heroes.map(heroe => <HeroCard key={heroe.id} {...heroe}/>  )
            }
        </div>
    );
}

export default HeroeList;