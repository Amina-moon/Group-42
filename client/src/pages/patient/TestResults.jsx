import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { HeartIcon, ArrowsUpDownIcon } from "@heroicons/react/24/outline";

const data = [
  { month: "Mar", systolic: 120, diastolic: 80 },
  { month: "Apr", systolic: 125, diastolic: 76 },
  { month: "May", systolic: 130, diastolic: 99 },
  { month: "Jun", systolic: 128, diastolic: 60 },
  { month: "Jul", systolic: 135, diastolic: 88 },
  { month: "Aug", systolic: 130, diastolic: 85 },
];

const TestResults = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-gray-500">Latest HbA1c</p>
            <p className="text-2xl font-bold text-gray-800">7.1%</p>
            <p className="text-teal-600 text-sm flex items-center">
              <ArrowsUpDownIcon className="w-4 h-4 mr-1" /> Improving
            </p>
          </div>
          <ArrowsUpDownIcon className="w-8 h-8 text-green-600" />
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-gray-500">Blood Pressure</p>
            <p className="text-2xl font-bold text-gray-800">130/85</p>
            <p className="text-teal-600 text-sm flex items-center">
              <ArrowsUpDownIcon className="w-4 h-4 mr-1" /> Controlled
            </p>
          </div>
          <HeartIcon className="w-8 h-8 text-green-600" />
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-gray-500">Total Cholesterol</p>
            <p className="text-2xl font-bold text-gray-800">195</p>
            <p className="text-teal-600 text-sm flex items-center">
              <ArrowsUpDownIcon className="w-4 h-4 mr-1" /> Good
            </p>
          </div>
          <ArrowsUpDownIcon className="w-8 h-8 text-green-600" />
        </div>
      </div>

      
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Blood Pressure Trends</h3>
        <p className="text-gray-500 text-sm mb-4">Your blood pressure readings over the past 6 months</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="diastolic" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TestResults;
