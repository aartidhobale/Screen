"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Menubar from "@/app/components/Menubar";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function DatePickerWithRange({ dateRange, setDateRange }) {
  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function HolidayForm() {
  const [holidays, setHolidays] = useState([]);
  const [holidayTitle, setHolidayTitle] = useState("");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateHoliday = (e) => {
    e.preventDefault();
    if (holidayTitle && dateRange.from && dateRange.to) {
      if (editingIndex !== null) {
       
        const updatedHolidays = holidays.map((holiday, index) => 
          index === editingIndex 
            ? { title: holidayTitle, startDate: dateRange.from.toLocaleDateString(), endDate: dateRange.to.toLocaleDateString() } 
            : holiday
        );
        setHolidays(updatedHolidays);
        setEditingIndex(null);
      } else {
        
        setHolidays([
          ...holidays,
          {
            title: holidayTitle,
            startDate: dateRange.from.toLocaleDateString(),
            endDate: dateRange.to.toLocaleDateString(),
          },
        ]);
      }
      resetForm();
    }
  };

  const editHoliday = (index) => {
    const holidayToEdit = holidays[index];
    setHolidayTitle(holidayToEdit.title);
    setDateRange({ from: new Date(holidayToEdit.startDate), to: new Date(holidayToEdit.endDate) });
    setEditingIndex(index);
  };

  const resetForm = () => {
    setHolidayTitle("");
    setDateRange({ from: new Date(), to: addDays(new Date(), 7) });
  };

  return (
    <>
      <Menubar />
      <div className="max-w-md mx-auto p-6 space-y-6">
       
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">{editingIndex !== null ? "Edit Holiday" : "Add New Holiday"}</h2>
          <form onSubmit={addOrUpdateHoliday} className="space-y-4">
            <div>
              <label className="block font-medium">Holiday Title:</label>
              <Input
                type="text"
                placeholder="Enter holiday name"
                value={holidayTitle}
                onChange={(e) => setHolidayTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Select Date Range:</label>
              <DatePickerWithRange dateRange={dateRange} setDateRange={setDateRange} />
            </div>
            <Button type="submit" className="mt-4">{editingIndex !== null ? "Update" : "Submit"}</Button>
          </form>
        </div>

        {/* Holiday List Table */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Holiday List</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Holiday Title</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Manage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holidays.length === 0 ? (
                <TableRow>
                  <TableCell colSpan="4" className="text-center">No holidays found.</TableCell>
                </TableRow>
              ) : (
                holidays.map((holiday, index) => (
                  <TableRow key={index}>
                    <TableCell>{holiday.title}</TableCell>
                    <TableCell>{holiday.startDate}</TableCell>
                    <TableCell>{holiday.endDate}</TableCell>
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <Button variant="secondary" className="mb-1" onClick={() => editHoliday(index)}>
                          Edit
                        </Button>
                        <Button variant="secondary" onClick={() => {
                          setHolidays(holidays.filter((_, i) => i !== index));
                        }}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
