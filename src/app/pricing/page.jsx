'use client'

import axios from "axios";
import React, { useState } from "react";
import { Suspense } from 'react'
import MovieCard from "../components/moviecard";

export default function page() {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const [movieArray, movieUpdate] = useState([]);
    const [page, updatePage] = useState(1);

    function getData(count) {
        axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=6d02a218c581074ce22ac8d31f03aaf7&page=${count}`,
            method: "GET"
        })
            .then((res) => {
                console.log(res.data.results)
                movieUpdate(res.data.results);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    React.useEffect(() => {
        getData(1);
    }, []);

    function pageIncrement() {
        let count = page + 1;
        updatePage(count)
        getData(count)
    }
    function pageDecrement() {
        if (page > 1) {
            let count = page - 1;
            updatePage(count)
            getData(count)
        }
    }
    return (
        <div className="container-fluid">
            <div className="row text-center">
                {movieArray.map(value => (
                    <div key={value.id} className="col-md-2 col-6">
                        <MovieCard title={value.title} imagepath={IMGPATH + value.poster_path} />
                    </div>
                ))}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-1 col-2 text-end">
                    <button onClick={pageDecrement} className="btn btn-outline-danger">-</button>
                </div>
                <div className="col-md-1 col-2 text-center">
                    <p>{page}</p>
                </div>
                <div className="col-md-1 col-2 text-left">
                    <button onClick={pageIncrement} className="btn btn-outline-success">+</button>
                </div>
            </div>
        </div >
    )
}