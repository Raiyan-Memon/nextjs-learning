'use client'

import axios from "axios"
import React, {useState, useEffect} from "react";
import toastr from "toastr";
import 'toastr/build/toastr.css';

export default function Page() {

    useEffect(() => {
        require("toastr/build/toastr.min.js");
      }, []);

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }


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
                toastr.success('Success', "Temperature Found");
            })
            .catch((err) => {
                console.log(err)
                toastr.options.progressBar = true;
                toastr.error('Error', "No City Found");
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