
"use client";

import Menubar from "@/app/components/Menubar";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";


const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const TemplateForm = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <>
      <Menubar />
      <div className="container mx-auto p-8 bg-white rounded-lg shadow mt-6">
        <h1 className="text-3xl font-semibold mb-6">Add New Template</h1>

        <form className="space-y-8">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-medium mb-2">Select Claimant</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claimant1">Claimant 1</SelectItem>
                  <SelectItem value="claimant2">Claimant 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block font-medium mb-2">Select Product</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product1">Product 1</SelectItem>
                  <SelectItem value="product2">Product 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

        
          <div>
            <label className="block font-medium mb-2">Template Title</label>
            <Input type="text" placeholder="Enter template title" className="w-full" />
          </div>

         
          <div>
            <label className="block font-medium mb-2">Paste content and configure</label>
            <p className="text-sm text-muted-foreground mb-4">Super simple WYSIWYG editor on bootstrap</p>
            {ReactQuill && (
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                className="rounded-md border"
                placeholder="Type content here"
              />
            )}
          </div>

        
          <div className="flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TemplateForm;
