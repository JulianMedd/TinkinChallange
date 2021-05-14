import React from 'react';
import "./recipe.scss";

export const Recipe = ({rec}) =>{

    return (
        <div className="recipe" >
            <div className="recipe__container" > 
                <p>{rec.name}</p>
                <form>
                    <p className="reviews">
                        <input type="radio" name="stars" value="4"/>
                            <label >★</label>
                        <input type="radio" name="stars" value="3"/>
                            <label >★</label>
                        <input type="radio" name="stars" value="2"/>
                            <label >★</label>
                        <input type="radio" name="stars" value="1"/>
                            <label >★</label>
                        
                    </p>
                </form>
                <p>Cooked Before</p>
            </div>
        </div>
    )
}