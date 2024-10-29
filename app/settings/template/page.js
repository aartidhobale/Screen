// components/TemplateForm.js
"use client";

import Menubar from "@/app/components/Menubar";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Dynamically import react-quill-new without SSR
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const TemplateForm = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <>
      <Menubar />
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-6">
        <h1 className="text-3xl font-semibold mb-6">Add New Template</h1>

        <form className="space-y-8">
          {/* Row for Select Claimant and Select Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Claimant</label>
              <Select>
                <SelectTrigger className="w-full border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claimant1">Claimant 1</SelectItem>
                  <SelectItem value="claimant2">Claimant 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Product</label>
              <Select>
                <SelectTrigger className="w-full border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product1">Product 1</SelectItem>
                  <SelectItem value="product2">Product 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Template Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Template Title</label>
            <Input type="text" placeholder="Enter template title" className="w-full border border-gray-300 rounded-lg" />
          </div>

          {/* WYSIWYG Editor */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Paste content and configure</label>
            <p className="text-gray-500 mb-4 text-sm">Super simple WYSIWYG editor on bootstrap</p>
            {ReactQuill && (
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                className="bg-white rounded-lg border border-gray-300"
                placeholder="Type content here"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TemplateForm;
