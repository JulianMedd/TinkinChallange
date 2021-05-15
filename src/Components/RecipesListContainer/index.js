import React, { useState, useEffect, useContext } from 'react';
import "./recipeListContainer.scss";
import { RecipesList } from '../RecipesList';
import { SearchContext } from '../../Context/SearchContext';

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
        cookedBefore : false
    },{
        id : 3,
        name : "Crispy spiced eggplant",
        review : 3,
        cookedBefore : true
    },{
        id : 4,
        name : "Pumpkin soup with a twist",
        review : 4,
        cookedBefore : true
    },{
        id : 5,
        name : "Charred tofu, corn and asparagus salad",
        review : 4,
        cookedBefore : true
    },{
        id : 6,
        name : "One-pan ceamy pesto chicken & gnocchi",
        review : 4,
        cookedBefore : true
    },{
        id : 7,
        name : "Creamy chiken bake",
        review : 3,
        cookedBefore : true
    },{
        id : 8,
        name : "French-style chicken and potatoes",
        review : 2,
        cookedBefore : false
    },{
        id : 9,
        name : "Braised beef and vegetables",
        review : 1,
        cookedBefore : true
    },{
        id : 10,
        name : "Pumpkin, spinach and lentil lasagne",
        review : 4,
        cookedBefore : true
    },{
        id : 11,
        name : "Soothing chiken soup",
        review : 4,
        cookedBefore : true
    },{
        id : 12,
        name : "Cornflake-crumbed chiken with wedges",
        review : 4,
        cookedBefore : true
    },{
        id : 13,
        name : "quick beef enchiladas",
        review : 4,
        cookedBefore : true
    },{
        id : 14,
        name : "One-pan creamy pesto chicken & gnocchi",
        review : 4,
        cookedBefore : true
    },{
        id : 15,
        name : "Cheesy broccoli bake",
        review : 4,
        cookedBefore : true
    },{
        id : 16,
        name : "Lamb shank ragu with pappardelle",
        review : 4,
        cookedBefore : true
    }]

export const RecipeListContainer = () =>{
    const [recipes, setRecipes] = useState(listRecipes)
    const {search} = useContext(SearchContext)
    const {filterCooked} = useContext(SearchContext)

    useEffect(()=>{
        if (search){
            const results = listRecipes.filter(person =>
                person.name.toLowerCase().includes(search)
              );
            setRecipes(results);
        }else if(filterCooked || !filterCooked){//REVISAR

            if(filterCooked === "all"){
                setRecipes(listRecipes)
            }else{
                const results = listRecipes.filter(person =>{
                        if(person.cookedBefore === filterCooked) return person
                    }
                );
                setRecipes(results);
            }
        }

    },[search,filterCooked])

    console.log(recipes);
    console.log(search);
    console.log(filterCooked);

    return (
        <div className="recipeListContainer" >
            <RecipesList recipes={recipes} ></RecipesList>
        </div>)
}