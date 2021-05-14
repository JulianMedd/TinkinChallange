import React, { useState, useEffect } from 'react';
import "./recipeListContainer.scss";
import { RecipesList } from '../RecipesList';

/* RECETAS HARCODEADAS */

    const listRecipes =[{
        id : 1,
        name : "Mixed Berry Melody",
        review : 4,
        cookedBefore : true
    },{
        id : 2,
        name : "Thai red curry cauliflower soup",
        review : 4,
        cookedBefore : true
    }]

export const RecipeListContainer = () =>{
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setRecipes(listRecipes)
        },2000)
    },[])

    console.log(recipes);

    return (
        <div className="recipeListContainer" >
            <RecipesList recipes={recipes} ></RecipesList>
        </div>)
}