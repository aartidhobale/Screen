"use client";

import Menubar from '../../components/Menubar';
import React, { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';

const ArbitratorForm = () => {
  const [file, setFile] = useState(null);

  return (
    <>
      <Menubar />
      <form className="max-w-full mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">New Arbitrator</h2>
        <p className="text-gray-600 mb-6">Please add only current date or future dates only.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Arbitrator Name</label>
            <Input type="text" placeholder="Enter Arbitrator Name" className="w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Email ID</label>
            <Input type="email" placeholder="Enter Email ID" className="w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Contact No.</label>
            <Input type="tel" placeholder="10 Digit Mobile No." className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Address Line 1</label>
            <Input type="text" placeholder="Enter Address Line 1" className="w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Address Line 2</label>
            <Input type="text" placeholder="Enter Address Line 2" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Select State</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">Maharashta</SelectItem>
                <SelectItem value="state2">Abu-dabi</SelectItem>
                <SelectItem value="state3">Banglore</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Select City</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="city1">Pune</SelectItem>
                <SelectItem value="city2">Mumbai</SelectItem>
                <SelectItem value="city3">Banglore</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Pin Code</label>
            <Input type="text" placeholder="Enter 6 Digit Pin Code" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Qualification</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelors">Bachelors</SelectItem>
                <SelectItem value="masters">Masters</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Years of Experience</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Year</SelectItem>
                <SelectItem value="2">2 Years</SelectItem>
                <SelectItem value="3">3+ Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Contested Arbitration</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Contested Arbitration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Specialization</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corporate">Corporate Law</SelectItem>
                <SelectItem value="civil">Civil Law</SelectItem>
                <SelectItem value="criminal">Criminal Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Specialization</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family">Family Law</SelectItem>
                <SelectItem value="property">Property Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700">Categories of Panel of Arbitrators</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="text-lg font-semibold">Terms and Conditions</h3>
            <p>Undertakings:</p>
            <ul className="list-disc pl-5">
              <li>I agree to abide by the Rules of Arbitration of the KASA ADR including Guidelines & Code of Conduct.</li>
              <li>I shall take up and complete the arbitration assigned to me with utmost diligence and expedition.</li>
              <li>All arbitrators being of equal status, I shall not object to my appointment as arbitrator based on prior status.</li>
              <li>I have not been convicted or charged of any offense or any criminal investigation or inquiry pending against me.</li>
              <li>I declare that I have not been removed as an arbitrator under questionable circumstances.</li>
              <li>I declare that the information furnished is true and correct.</li>
            </ul>
            <div className="mt-3 flex items-center">
              <Checkbox className="mr-2" />
              <label className="text-gray-700">I agree to all terms and conditions</label>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Upload your photo</h3>
            <p>Important Information:</p>
            <ul className="list-disc pl-5">
              <li>Image type: jpg, png</li>
              <li>Max image width: 150px</li>
            </ul>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} className="mt-2" />
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit" className="bg-blue-600 text-white py-1 px-4 rounded-md text-sm font-medium hover:bg-blue-700">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default ArbitratorForm;
