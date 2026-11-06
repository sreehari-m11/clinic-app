import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='flex justify-between px-8 py-4'>
            <p className='text-green-700 text-xl font-bold'>Clinic App</p>
            <div className='flex gap-8 items-center'>
                <NavLink to="/" className={({ isActive }) => isActive ? "bg-green-100 rounded-xl p-2 flex gap-10 text-sm font-semibold" : "p-2 text-sm font-semibold"} >Home</NavLink>
                <NavLink to="/districts" className={({ isActive }) => isActive ? "bg-green-100 rounded-xl p-2 flex gap-10 text-sm font-semibold" : "p-2 text-sm font-semibold"}>View Districts</NavLink>
                <NavLink to="/departments" className={({ isActive }) => isActive ? "bg-green-100 rounded-xl p-2 flex gap-10 text-sm font-semibold" : "p-2 text-sm font-semibold"}>View Departments</NavLink>
                <NavLink to="/booktoken" className={({ isActive }) => isActive ? "bg-green-100 rounded-xl p-2 flex gap-10 text-sm font-semibold" : "p-2 text-sm font-semibold"}>Book your Token</NavLink>
            </div>
        </nav>

    )
}