'use client'

import Image from "next/image";
import { useEffect } from 'react';

export default async function page() {


    async function GetData() {
        const data = await fetch("https://64b3f40b0efb99d862689318.mockapi.io/students");
        return data.json();
    }

    const newData = await GetData();
    // console.log(newData);

    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
    ];
    console.log(users);
    return (

        <div>

            {newData.map((user: any) => (
                <p key={user.id}>{user.id} {user.name}</p>

            )
            )}

            {/* <Image
                src="https://image.tmdb.org/t/p/w1280/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
                alt="Picture of the author"
                width={500}
                height={500}/> */}
            {/* <Image
                src="https://s3.amazonaws.com/my-bucket/profile.png"
                alt="Picture of the author"
                width={500}
                height={500}
            /> */}
            home page
            <ul>{users.map((user) => (
                <p key={user.name}>{user.name} {user.age}</p>

            )
            )}</ul>
        </div>


    )
}