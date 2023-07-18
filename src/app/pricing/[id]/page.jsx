'use client'

import axios from "axios";
import React, { useState } from "react";
import { Suspense } from 'react'
import MovieCard from "../../components/moviecard";
import Link from "next/link";
import { useParams } from 'next/navigation'
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Page() {

    const params = useParams()
    // console.log(params.id);

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const [movieArray, movieUpdate] = useState([]);
    const [page, updatePage] = useState(parseInt(params.id));

    function GetData() {
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
        GetData();
    }, []);

    function PageIncrement() {
        let count = page + 1;
        updatePage(count)
        GetData()
    }
    function PageDecrement() {
        if (page > 1) {
            let count = page - 1;
            updatePage(count)
            GetData()
        }
    }


    return (
        <div className="container-fluid">

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}

                {movieArray.map(value => (
                    // <Suspense fallback={<p>Loading feed...</p>}>
                    // <div key={value.id} className="col-md-2 col-6">
                    //     <MovieCard title={value.title} imagepath={IMGPATH + value.poster_path} />
                    // </div>

                    <SwiperSlide key={value.id}>
                        <img src={IMGPATH + value.poster_path} width="100%" height="100%" alt="Picture of the author" />
                    </SwiperSlide>
                    // </Suspense>
                ))}



            </Swiper>

            <div className="row text-center mt-3">
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
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <Link className="underline-remove" href={'/pricing/' + (page - 1)}>
                            <button disabled={page != 1 ? false : true} onClick={page != '1' ? PageDecrement : ''} className="page-link">Previous</button>
                        </Link>
                    </li>
                    <li hidden={page != 1 ? false : true} className="page-item"><Link className="page-link" href={'/pricing/' + (page - 1)}>{page - 1}</Link></li>
                    <li className="page-item"><Link className="page-link bg-dark" href={'/pricing/' + (page)}>{page}</Link></li>
                    <li className="page-item"><Link className="page-link" href={'/pricing/' + (page + 1)}>{page + 1}</Link></li>
                    <li className="page-item">
                        <Link className="underline-remove" href={'/pricing/' + (page + 1)}>
                            <button onClick={PageIncrement} className="page-link">Next</button>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div >
    )
}