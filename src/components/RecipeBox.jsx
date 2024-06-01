import React from "react";
import "../components/RecipeBox.css";




function RecipeBox(prop)
{
  
    return <div className="recipeTile" onClick={()=>window.open(prop.link)}>
        <p className="recipeTile__label">{prop.label}</p>
        <img src={prop.image} className="recipeTile__image" />
    </div>;
}

export default RecipeBox;


