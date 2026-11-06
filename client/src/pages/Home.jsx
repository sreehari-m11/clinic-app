import DoctorCard from "../components/DoctorCard";
import { useState, useEffect } from "react";

function Home() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/doctors')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDoctors(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div className="flex gap-4 p-8 flex-wrap justify-center">
                {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
            </div>
        </div>
    )
}

export default Home;