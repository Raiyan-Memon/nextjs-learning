'use client'

export default function page() {


    const users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 35 }
    ];
    console.log(users);
    return (

        <div>
            home page
            <ul>{users.map((user) =>(
                <p key={user.name}>{user.name} {user.age}</p>

            )
            )}</ul>
        </div>


    )
}