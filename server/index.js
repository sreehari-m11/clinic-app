import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const doctors = [
    {
        id: 1,
        name: "Dr. Anil",
        fullname: "Anil Kumar",
        district: "Ernakulam",
        department: "Cardiology",
        clinicLocation: "Anil Heart Clinic, MG Road, Kochi",
        contactNumber: "9847000001",
        visitingTime: "5:00 PM - 8:00 PM",
        visitingDays: ["Mon", "Wed", "Fri"],
        bookingOpenTime: "8:00 AM",
        totalTokens: 12
    },
    {
        id: 2,
        name: "Dr. Arun",
        fullname: "Arun Varghese",
        district: "Kottayam",
        department: "Ortho",
        clinicLocation: "Arun Bone & Joint Clinic, Nagampadam, Kottayam",
        contactNumber: "9847000002",
        visitingTime: "10:00 AM - 1:00 PM",
        visitingDays: ["Tue", "Thu", "Sat"],
        bookingOpenTime: "7:00 AM",
        totalTokens: 15
    },
    {
        id: 3,
        name: "Dr. Meera",
        fullname: "Meera Nair",
        district: "Ernakulam",
        department: "Pediatrics",
        clinicLocation: "Meera Child Care, Edappally, Kochi",
        contactNumber: "9847000003",
        visitingTime: "9:00 AM - 12:00 PM",
        visitingDays: ["Mon", "Tue", "Thu", "Fri"],
        bookingOpenTime: "6:30 AM",
        totalTokens: 20
    },
    {
        id: 4,
        name: "Dr. Suresh",
        fullname: "Suresh Menon",
        district: "Thrissur",
        department: "Cardiology",
        clinicLocation: "Suresh Cardiac Centre, Round South, Thrissur",
        contactNumber: "9847000004",
        visitingTime: "4:00 PM - 7:00 PM",
        visitingDays: ["Wed", "Sat"],
        bookingOpenTime: "9:00 AM",
        totalTokens: 10
    },
    {
        id: 5,
        name: "Dr. Latha",
        fullname: "Latha Pillai",
        district: "Ernakulam",
        department: "Cardiology",
        clinicLocation: "Latha Heart Care, Aluva",
        contactNumber: "9847000005",
        visitingTime: "6:00 PM - 8:30 PM",
        visitingDays: ["Tue", "Thu"],
        bookingOpenTime: "10:00 AM",
        totalTokens: 8
    }
];

app.get('/', (req, res) => {
    res.send("Clinic api running")
});

app.get('/api/doctors', (req, res) => {
    const { district, department } = req.query;
    const filteredDoctors = doctors.filter((doctor) => (!department || doctor.department === department) && (!district || doctor.district === district))
    res.json(filteredDoctors);
});

app.get('/api/doctors/:id', (req, res) => {
    const { id } = req.params;
    const doctor = doctors.find((doctor) => doctor.id === Number(id));
    if (!doctor) {
        res.status(404).json({ message: "Doctor not found" })
        return;
    }
    res.json(doctor);
})

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000")
})