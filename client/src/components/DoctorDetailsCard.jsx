import TokenPicker from "./TokenPicker";

export default function DoctorDetailsCard({ doctor }) {
    const name = doctor.fullname.split(" ")
    const shortname = name[0][0] + name[1][0];
    return (
        <div className="flex flex-wrap gap-4 p-8 justify-between">
            <div className="w-3/7 bg-gray-100 p-6 rounded-xl">
                <div className="flex gap-4">
                    <div className="size-15 flex justify-center items-center text-xl font-bold bg-green-200 rounded-full">{shortname.toUpperCase()}</div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl font-bold">{doctor.name}</h4>
                        <p className="text-lg font-semibold text-slate-600">{doctor.department} &middot; {doctor.district}</p>
                    </div>
                </div>

                <div className="py-8 flex flex-col gap-2">
                    <div className="flex justify-between">
                        <p>Clinic location</p>
                        <p className="font-medium">{doctor.clinicLocation}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Visiting time</p>
                        <p className="font-medium">{doctor.visitingTime}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Visits on</p>
                        <p className="font-medium">{doctor.visitingDays.join(", ")}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Token booking opens</p>
                        <p className="font-medium">{doctor.bookingOpenTime}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total tokens per day</p>
                        <p className="font-medium">{doctor.totalTokens}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Offline booking</p>
                        <p className="font-medium">{doctor.contactNumber}</p>
                    </div>
                </div>
            </div>

            <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
                <TokenPicker totalTokens={doctor.totalTokens} />
            </div>
        </div>
    )
}