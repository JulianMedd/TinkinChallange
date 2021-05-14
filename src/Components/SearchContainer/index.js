import React from 'react';
import "./searchContainer.scss";

export const SearchContainer = () =>{

    return (
        <article className="search" >
            <h2 className="search__title" >Kitchen Recipes</h2>
            <div className="search__input" >
                <input placeholder="Search" />
                <select id="search__filter">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                </select>
            </div>
            <div className="search__recipes--header" >
                <div className="search__recipes__container" > 
                    <p className="recipeName" >Recipe Name</p>
                    <p className="recipeRewies" >Rewies</p>
                    <p className="recipesCooked" >Cooked Before</p>
                </div>
            </div>
        </article>
    )
}