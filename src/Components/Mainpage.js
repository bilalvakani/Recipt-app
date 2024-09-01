import React, { useState } from 'react'
import { Mealscards } from './Mealscards'

export const Mainpage = () => {

    const [data, setData] = useState()
    const [search, Setsearch] = useState("")
    const [message, Setmessage] = useState("")


    const searchBar = (event) => {
        Setsearch(event.target.value)
    }

    const mealApi = async () => {
        if (search == "") {
            Setmessage("Please enter somethings ")
        } else {

            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            // const convert = api.json
            // console.log(api);
            const jsonData = await api.json();
            // console.log(jsonData.meals)
            setData(jsonData.meals)
            Setmessage("")
            Setsearch("")
        }



    }

    return (
        <>
            <h1 className='heading'> VK Food recipe App</h1>
            <div className='container'>
                <div className='Search-bar'>

                    <input type='text' placeholder='Enter Dish ' onChange={searchBar} value={search} />
                    <button onClick={mealApi}>Search</button>
                    <br></br>


                </div>
                <div className='message'>
                    <h2>{message}</h2>
                </div>
                <div>
                    <Mealscards data={data} />

                </div>



            </div>
        </>
    )
}
