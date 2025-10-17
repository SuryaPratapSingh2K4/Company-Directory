import React, { useState } from 'react'

function Header({ onGenerate, onSearch }) {
    const [generate, setGenerate] = useState(false);
    const [search, setSearch] = useState("");
    const handleGenerate = () => {
        setGenerate(true);
        onGenerate(true);
    }
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    }
    return (
        <header className="navbar bg-base-300 shadow-sm md:px-8 px-4">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl font-bold">Companies Directory</a>
            </div>


            {generate && (
                <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    className="input px-4 input-bordered flex-grow min-w-[120px] max-w-[300px]"
                />
            )}

            <div className='navbar-end mr-4'>
                <button onClick={handleGenerate} className="btn w-28 bg-green-500 justify-center hover:bg-green-700 font-bold">Get Started</button>
            </div>

        </header>
    )
}

export default Header
