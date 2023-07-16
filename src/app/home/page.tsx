'use client'

import Image from "next/image";

export default async function page() {


    const data = await fetch("https://64b3f40b0efb99d862689318.mockapi.io/students", {
        method: "GET",
    });
    // const response  = await data;
    console.log(data    );
    



    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
    ];
    console.log(users);
    return (

        <div>

            {/* <Image
                src="https://image.tmdb.org/t/p/w1280/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
                alt="Picture of the author"
            /> */}

            home page
            <ul>{users.map((user) => (
                <p key={user.name}>{user.name} {user.age}</p>

            )
            )}</ul>


            <div className="container">

                <div className="row">

                </div>

            </div>



        </div>


    )
}