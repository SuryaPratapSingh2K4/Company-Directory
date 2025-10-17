import React, { useEffect, useState } from 'react'

function CompanyTable({ active, search }) {
    const [companies, setCompanies] = useState([]);
    const [filteredCompany, SetFilteredCompany] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!active) return;
        const fetchCompanies = async () => {
            setLoading(true);
            try {
                const data = await fetch('/companies.json');
                if (!data.ok) {
                    throw new Error("Failed to load the Companies Data");
                }
                const res = await data.json();
                setCompanies(res);
            } catch (error) {
                console.error("Error fetching companies:", error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCompanies();
    }, [active]);


    useEffect(() => {
        if (!search) SetFilteredCompany(companies);
        const lowercase = search.toLowerCase();

        const filtered = companies.filter((c) => {
            const name = c.name.toLowerCase();
            const location = c.location.toLowerCase();
            const industry = c.industry.toLowerCase();
            const employees = c.employees.toString();
            return name.includes(lowercase) || location.includes(lowercase) || industry.includes(lowercase) || employees.includes(lowercase);
        })
        SetFilteredCompany(filtered);
    }, [search, companies])


    if (loading) {
        return (
            <div className='flex justify-center items-center h-64'>
                <span className='loading loading-spinner loading-lg'>Loading...</span>
            </div>
        )
    }
    return (
        <section className='max-w-7xl mx-auto bg-base-300 p-4 rounded-lg mt-6'>
            <h1 className='text-xl font-bold text-center'>Company List</h1>
            <div className='overflow-x-auto'>
                <table className='w-full border-collapse text-left mt-4'>
                    <thead className='bg-base-100'>
                        <tr>
                            <th className='p-3 border-b font-medium'>Company Name</th>
                            <th className='p-3 border-b font-medium'>Location</th>
                            <th className='p-3 border-b font-medium'>Industry</th>
                            <th className='p-3 border-b font-medium'>Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompany.map((c) => (
                            <tr key={c.id} className='hover:bg-base-200'>
                                <td className='p-3 border-b font-medium'>{c.name}</td>
                                <td className='p-3 border-b'>{c.location}</td>
                                <td className='p-3 border-b'>{c.industry}</td>
                                <td className='p-3 border-b'>{c.employees}</td>
                            </tr>
                        ))}
                        {
                            filteredCompany.length === 0 && companies.length > 0 && !loading && (
                                <tr><td colSpan="4" className='py-8 text-center'>No companies found.</td></tr>
                            )
                        }
                        {companies.length === 0 && !loading && (
                            <tr>
                                <td colSpan="4" className='py-8 text-center'>No companies Data available.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CompanyTable
