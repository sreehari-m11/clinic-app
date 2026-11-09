import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
    contactNumber: String
});

const Clinic = mongoose.model("Clinic", clinicSchema);
export default Clinic;