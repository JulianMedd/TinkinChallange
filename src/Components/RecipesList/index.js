import React from 'react';
import { Recipe } from '../Recipe';

export const RecipesList = ({recipes}) =>{

    return (
        <>
            {recipes.map(rec => <Recipe key={rec.id} rec={rec}/>)}
        </>)
}