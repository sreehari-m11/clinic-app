import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
    const name = doctor.fullname.split(" ")
    const shortname = name[0][0] + name[1][0];
    return (
        <Link to={`/doctors/${doctor.id}`} className="flex flex-col gap-4 mb-8 w-100 px-10 py-5 bg-slate-100 shadow-gray-300 shadow-lg rounded-xl">
            <div className="size-15 flex justify-center items-center text-xl font-bold bg-green-200 rounded-full">{shortname.toUpperCase()}</div>
            <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-bold">{doctor.name}</h4>
                <p className="text-xl font-semibold">{doctor.department}</p>
                <p className="text-lg font-medium text-slate-500">{doctor.district}</p>
            </div>
            <button className="border-2 border-slate-200 py-2 rounded-xl hover:bg-green-100 hover:border-green-400
            hover:cursor-pointer transition-all delay-50 ease-in duration-75">View Details</button>
        </Link>
    )
}