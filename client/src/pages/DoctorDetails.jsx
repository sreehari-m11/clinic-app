import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorDetailsCard from "../components/DoctorDetailsCard";

export default function DoctorDetails() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");
        setDoctor(null);
        fetch(`http://localhost:5000/api/doctors/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Doctor not found!");
                }
                return res.json()
            })
            .then((data) => {
                setLoading(false);
                setDoctor(data);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
                console.log(err.message);
            })
    }, [id])

    return (
        <div>
            {loading === true ? <p>Loading...</p> : !doctor ? <p> {error}</p> : <DoctorDetailsCard doctor={doctor} />
            }
        </div >
    )
}