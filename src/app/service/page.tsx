import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service - Page',
}


export default function Page() {

    const array = ['raiyan', 'amaan', 'memon'];
    var arr = {
        'name': 'raiyan',
        'age': 29,
        'gender': 'male'
    }

    console.log(array);
    console.log(arr);

    return (
        <div>Service Page

            {array.map((value) => (
                <li key={value}>{value}</li>
            ))}

            <li>{arr.name}</li>

            <li>{array[1]}</li>
        </div>
    )
}