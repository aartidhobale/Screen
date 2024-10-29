"use client";
import Menubar from '@/app/components/Menubar';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; // ShadCN Input component
import { Button } from '@/components/ui/button'; // ShadCN Button component
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // ShadCN Select components

export default function ClaimantPage() {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);

    const stateOptions = {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Goa: ["Panaji", "Margao"],
        Karnataka: ["Bangalore", "Mysore"],
    };

    const handleStateChange = (state) => {
        setSelectedState(state);
        setCities(stateOptions[state] || []);
        setSelectedCity(''); // Reset selected city when state changes
    };

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    return (
        <>
            <Menubar />
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">New Claimant</h1>
                <p className="text-gray-500 mb-6">New Claimant and Claimants List</p>

                {/* Form Section */}
                <form className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <label className="block">
                            <span className="text-gray-700">Company Name</span>
                            <Input type="text" placeholder="Enter Company Name" className="w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Authorized Person Name</span>
                            <Input type="text" placeholder="Enter Authorized Person Name" className="w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Designation</span>
                            <Input type="text" placeholder="Enter Designation" className="w-full mt-1" />
                        </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <label className="block">
                            <span className="text-gray-700">Email ID</span>
                            <Input type="email" placeholder="Enter Email ID" className="w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Contact No.</span>
                            <Input type="text" placeholder="Enter Contact No." className="w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">State</span>
                            <Select onValueChange={handleStateChange} value={selectedState}>
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Select State" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(stateOptions).map((state) => (
                                        <SelectItem key={state} value={state}>{state}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <label className="block">
                            <span className="text-gray-700">City</span>
                            <Select 
                                onValueChange={handleCityChange} 
                                value={selectedCity} 
                                disabled={!selectedState} // Disable if no state is selected
                            >
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent>
                                    {cities.map((city) => (
                                        <SelectItem key={city} value={city}>{city}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Branch Name</span>
                            <Input type="text" placeholder="Enter Branch Name" className="w-full mt-1" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Pin Code</span>
                            <Input type="text" placeholder="Enter 6 Digit Pin Code" className="w-full mt-1" />
                        </label>
                    </div>
                    <div className="flex justify-start">
                        <Button type="submit" variant="primary">Submit</Button>
                    </div>
                </form>

                {/* Export Buttons */}
                <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
                    <p className="mb-4 text-gray-700">We need only Excel Export</p>
                    <div className="flex gap-2">
                        <Button variant="secondary">Copy</Button>
                        <Button variant="secondary">Excel</Button>
                        <Button variant="secondary">PDF</Button>
                        <Button variant="secondary">Column visibility</Button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="overflow-auto">
                        <table className="w-full border border-gray-200 text-sm text-left">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="p-3 border-b">Company Name</th>
                                    <th className="p-3 border-b">Authorized Person</th>
                                    <th className="p-3 border-b">Designation</th>
                                    <th className="p-3 border-b">Contact No.</th>
                                    <th className="p-3 border-b">City</th>
                                    <th className="p-3 border-b">Branch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Replace this with actual data mapping */}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-600">Showing 1 to X of X entries</span>
                        <div className="flex gap-2">
                            <Button variant="primary">Previous</Button>
                            <Button variant="primary">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
