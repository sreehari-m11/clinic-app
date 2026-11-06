import { useState } from "react";
import { Link } from "react-router-dom";

export default function Districts() {

    const districts = ["Kasargod", "Kannur", "Wayanad", "Kozhikode", "Malappuram", "Palakkad", "Thrissur", "Ernakulam",
        "Alappuzha", "Kottayam", "Idukki", "Pathanamthitta", "Kollam", "Thiruvananthapuram"
    ]
    const departments = ["Cardiology", "Ortho", "Pediatrics", "Dermatology", "ENT"];
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    return (
        <div className="flex flex-col gap-5">
            <div className="px-8 mt-10">
                <h1 className="text-3xl font-semibold mb-2">View Districts</h1>
                <p className="text-sm text-slate-600">Click a district to show its departments</p>
            </div>
            <div className="flex flex-wrap gap-5 px-8">
                {districts.map((district) => {
                    return (
                        <button key={district} className={selectedDistrict === district ? "py-2 px-5 text-md font-semibold bg-green-100 text-green-800 border-2 border-green-600 rounded-xl hover:cursor-pointer" : "py-2 px-5 border text-md border-slate-200 rounded-xl transition-all delay-100 duration-75 hover:bg-green-100 hover:cursor-pointer"}
                            onClick={() => setSelectedDistrict(district)} >{district}</button>
                    )
                })}

            </div>

            {selectedDistrict && (
                <div className="flex flex-col gap-4 shadow-gray-400 shadow-sm rounded-lg mt-8 px-8 w-11/12 m-auto py-4">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-medium">Departments in {selectedDistrict}</h2>
                        <p>Click a department to see the doctors in that department</p>
                    </div>

                    <div className="flex gap-2">
                        {departments.map((department) => {
                            return (
                                <Link key={department} to={`/doctors/${selectedDistrict}/${department}`} className="text-sm font-medium border border-slate-200 
                            rounded-4xl px-6 py-2">{department}</Link>
                            )
                        })}
                    </div>

                </div>
            )}

        </div>
    )
}