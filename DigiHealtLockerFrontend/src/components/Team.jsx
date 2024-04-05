import { FaArrowRightLong } from "react-icons/fa6";

const people = [
    {
        name: 'Prathamesh Patil',
        role: 'Developer',
        imageUrl:'https://media.licdn.com/dms/image/D5603AQFxB51yEVg0XA/profile-displayphoto-shrink_100_100/0/1709230732551?e=1715212800&v=beta&t=Vlvj2cMNkOW8v4DY_afTHfjKZmDie703R5UvMwWaDDM'
    },
    {
        name: 'Tejas Pundpal',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D5603AQFJr_J4S32dgw/profile-displayphoto-shrink_100_100/0/1695177682396?e=1714003200&v=beta&t=8TRhBdOkD7vu68qIstHCCUgn0i4VkRe7Yqn4YEsSokA',
    },
    {
        name: 'Vedang Surnis',
        role: 'Developer',
        imageUrl:'https://media.licdn.com/dms/image/D5603AQHe8wFGNKOUXw/profile-displayphoto-shrink_100_100/0/1711101960512?e=1717632000&v=beta&t=R_YBk3Wxsh6evmkTJrT0s6sDVFQJOpZkfo4Gu9evN48'
    },
]

export default function Team() {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
                        <FaArrowRightLong size={40} />
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-teal-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}
