import React, { useState } from 'react';
import "./recipe.scss";
import { StartsReviews } from '../StartsReviews';

export const Recipe = ({rec}) =>{
    const [active, setActive] = useState(rec.cookedBefore)

    const activeCoockedCheck = (e)=>{
        e.preventDefault();
        active ? setActive(false) : setActive(true)
    }


    return (
        <div className="recipe" >
            <div className="recipe__container" > 
                <p className={active ? "" : "recipeCooked"}>{rec.name}</p>
                <StartsReviews reviews={rec.review}/>
                <div className="coockedCheck">
                    <div className={active ? "coockedCheck__btn active" : "coockedCheck__btn"} onClick={(e)=>activeCoockedCheck(e)}>
                        <div className="coockedCheck__circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
