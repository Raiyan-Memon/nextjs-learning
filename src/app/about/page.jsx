'use client'

import axios from "axios"
import React, {useState} from "react";

export default function Page() {

    var res = '';


    const [data, updateData] = useState({
        temp: "",
        name: "",
        temp_min: '',
        search : '',
    })


    function getData() {
        axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${data.search}&appid=f7dd5f65195d863069e051cef5e0e2ec&units=imperial`,
            method: "GET"
        })
            .then((res) => {
                console.log(res.data.main.temp)
                updateData({ ...data, temp: res.data.main.temp })
            })
            .catch((err) => {
                console.log(err)
            });
    }



    return (
        <div><p>Weather</p>
            <div className="container">
                <input type="type" onChange={(e) => updateData({...data, search : e.target.value})} className="form-control" name="" id="" /><button onClick={getData} className="btn btn-primary">Click</button>
                <p>Temperature : {data.temp}</p>
            </div>

        </div>
    )
}