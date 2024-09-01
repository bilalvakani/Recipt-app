
    import React, { useState } from 'react';
    import { useParams } from 'react-router-dom';

    export const Mealsinformation = () => {
        const { mealids } = useParams();
        const [info, setInfo] = useState(null);

        
        const getinfo = async () => {
        
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealids}`);
            const jsonformat = await response.json();
            console.log(jsonformat);

        
            if (jsonformat.meals && jsonformat.meals.length > 0) {
                setInfo(jsonformat.meals[0]);
            } else {
                setInfo(null);
            }
        };

    
        if (mealids && !info) {
            getinfo();
        }

        return (
            <div>
                {!info ? (
                    <p>Data not found</p>
                ) : (
                    <div className='meal-info'>
                        <img src={info.strMealThumb} alt={info.strMeal} />
                        <div className='info'>
                            <h1>Recipe Details</h1>
                            <button>{info.strMeal}</button>
                            <h3>Instructions</h3>
                            <p>{info.strInstructions}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    };
