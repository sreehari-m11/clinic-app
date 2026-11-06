import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

export default function DoctorsList() {
    const { district, department } = useParams();

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/api/doctors?district=${district}&department=${department}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setLoading(false);
                setDoctors(data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }, [district, department])

    return (
        <div className="p-10">
            <h1 className="text-4xl font-medium">{department} doctors from {district}</h1>
            {doctors.length ?
                <div className="flex flex-wrap gap-4 py-8">
                    {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
                </div> :
                loading === true ? <p className="text-2xl mt-8 text-slate-600">Loading...</p> : <p className="text-2xl mt-8 text-slate-600">No doctors found</p>}

        </div>
    )
}