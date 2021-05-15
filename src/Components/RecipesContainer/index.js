import React from 'react';
import "./recipesContainer.scss";
import { SearchContainer } from '../SearchContainer';
import { RecipeListContainer } from '../RecipesListContainer';
import { AddBtn } from '../AddBtn';

export const RecipesContainer = () =>{

    return (
        <section className="recipesSection" >
            <SearchContainer/>
            <RecipeListContainer/>
            <AddBtn/>
        </section>)
}