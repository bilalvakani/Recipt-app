import React from 'react'
import { NavLink } from "react-router-dom"

export const Mealscards = ({ data }) => {
    console.log(data)
    return (
        <div className='meals'>
            {!data ? "" : data.map((curtItem) => {
                return (
                    <div className='meal-img'>
                        <img src={curtItem.strMealThumb} />
                        <p>{curtItem.strMeal}</p>
                        <NavLink to={`/meal/${curtItem.idMeal}`}>
                            <button>Recipe</button>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}
