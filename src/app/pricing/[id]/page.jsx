'use client'

import axios from "axios";
import React, { useState } from "react";
import { Suspense } from 'react'
import MovieCard from "../../components/moviecard";
import Link from "next/link";
import { useParams } from 'next/navigation'
import NProgress from "nprogress";
import "nprogress/nprogress.css";


export default function Page() {

    const params = useParams()
    console.log(params.id);

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const [movieArray, movieUpdate] = useState([]);
    const [page, updatePage] = useState(parseInt(params.id));

    function GetData(count) {
        NProgress.start();
        axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=6d02a218c581074ce22ac8d31f03aaf7&page=${params.id}`,
            method: "GET"
        })
            .then((res) => {
                console.log(res.data.results)
                movieUpdate(res.data.results);
                NProgress.done();
            })
            .catch((err) => {
                console.log(err)
            });
    }


    React.useEffect(() => {
        GetData(1);
    }, []);

    function PageIncrement() {
        let count = page + 1;
        updatePage(count)
        GetData(count)
    }
    function PageDecrement() {
        if (page > 1) {
            let count = page - 1;
            updatePage(count)
            GetData(count)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row text-center">
                {movieArray.map(value => (
                    // <Suspense fallback={<p>Loading feed...</p>}>
                    <div key={value.id} className="col-md-2 col-6">
                        <MovieCard title={value.title} imagepath={IMGPATH + value.poster_path} />
                    </div>
                    // </Suspense>
                ))}
            </div>
            {/* <div className="row justify-content-center">
                <div className="col-md-1 col-2 text-end">
                    <Link href={'/pricing/' + (page - 1)}>
                        <button onClick={PageDecrement} className="btn btn-outline-danger">-</button>
                    </Link>
                </div>
                <div className="col-md-1 col-2 text-center">
                    <p>{page}</p>
                </div>
                <div className="col-md-1 col-2 text-left">
                    <Link href={'/pricing/' + (page + 1)}>
                        <button onClick={PageIncrement} className="btn btn-outline-success">+</button>
                    </Link>
                </div>
            </div> */}


            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <Link className="underline-remove" href={'/pricing/' + (page - 1)}>
                            <button disabled={page != 1 ? false : true} onClick={page != '1' ? PageDecrement : ''} className="page-link">Previous</button>
                        </Link>
                    </li>
                    <li hidden={page != 1 ? false : true} class="page-item"><Link class="page-link" href={'/pricing/' + (page - 1)}>{page - 1}</Link></li>
                    <li class="page-item"><a class="page-link" href={'/pricing/' + (page)}>{page}</a></li>
                    <li class="page-item"><a class="page-link" href={'/pricing/' + (page + 1)}>{page + 1}</a></li>
                    <li class="page-item">
                        <Link className="underline-remove" href={'/pricing/' + (page + 1)}>
                            <button onClick={PageIncrement} className="page-link">Next</button>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div >
    )
}