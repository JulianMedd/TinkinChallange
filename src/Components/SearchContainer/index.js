import React, { useContext } from 'react';
import "./searchContainer.scss";
import search from "../../assents/search.png"
import { SearchContext } from '../../Context/SearchContext';

export const SearchContainer = () =>{
    const {searchResult, filterResult} = useContext(SearchContext)


    return (
        <article className="search" >
            <h2 className="search__title" >Kitchen Recipes</h2>
            <div className="search__input" >
                <div className="search__input__container">
                    <img src={search} alt="icono search"/>
                    <input type="search" id="search" placeholder="Search" onChange={e=>searchResult(e.target.value)} />
                </div>
                <select id="search__filter" onChange={(e)=>filterResult(e.target.value)}>
                    <option value="all">Cooked before: ALL</option>
                    <option value="active">Cooked before: Ative</option>
                    <option value="inactive">Cooked before: Inactive</option>
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