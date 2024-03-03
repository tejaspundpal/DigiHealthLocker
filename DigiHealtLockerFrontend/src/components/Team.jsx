import { FaArrowRightLong } from "react-icons/fa6";

const people = [
    {
        name: 'Prathamesh Patil',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQGySHPCht265A/profile-displayphoto-shrink_100_100/0/1702826429380?e=1714003200&v=beta&t=u1qTLnk3CurCub9EihMy7-Pn4Rr6hjAnRQAFdOZ_BJE',
    },
    {
        name: 'Tejas Pundpal',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D5603AQFJr_J4S32dgw/profile-displayphoto-shrink_100_100/0/1695177682396?e=1714003200&v=beta&t=8TRhBdOkD7vu68qIstHCCUgn0i4VkRe7Yqn4YEsSokA',
    },
    {
        name: 'Purshottam Rajpurohit',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D4D35AQGfFKsZDmsnIA/profile-framedphoto-shrink_100_100/0/1697950868319?e=1709362800&v=beta&t=6T4h0N9Mrhy5yu533WS-_L3D7L33Ti6bJYqNmmsl0pk',
    },
    {
        name: 'Vedang Surnis',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D5635AQFq89QN559hBg/profile-framedphoto-shrink_100_100/0/1691501816314?e=1709362800&v=beta&t=xXnJOhwRT904n-6MbDqesuM350_zDTuERrfbi_5s2eI',
    },
    {
        name: 'Kartik Thombare',
        role: 'Developer',
        imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQHGCXRV26dodQ/profile-displayphoto-shrink_100_100/0/1706948746746?e=1714003200&v=beta&t=2ebNYcjlbXqICVmIIWTBpGfy3PsN-lGdXnkbkuCwIV8',
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
