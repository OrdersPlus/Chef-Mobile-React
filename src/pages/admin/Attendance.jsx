import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Plus, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  const staff = [
    {
      id: 1,
      name: "Gabriel Greenwood",
      role: "Chef",
      avatar: "GG",
      weekTotal: 40,
    },
    { id: 2, name: "Adam Go", role: "Head Chef", avatar: "AG", weekTotal: 45 },
    {
      id: 3,
      name: "Alexa Huson",
      role: "Chef de Partie",
      avatar: "AH",
      weekTotal: 38,
    },
    {
      id: 4,
      name: "Jessica Norman",
      role: "Sushi Chef",
      avatar: "JN",
      weekTotal: 35,
    },
    {
      id: 5,
      name: "Authur Laurus",
      role: "Commis Chef",
      avatar: "AL",
      weekTotal: 30,
    },
  ];

  const days = [
    { num: 16, short: "Mon", date: 16, isToday: false },
    { num: 17, short: "Tue", date: 17, isToday: false },
    { num: 18, short: "Wed", date: 18, isToday: true },
    { num: 19, short: "Thu", date: 19, isToday: false },
    { num: 20, short: "Fri", date: 20, isToday: false },
    { num: 21, short: "Sat", date: 21, isToday: false },
    { num: 22, short: "Sun", date: 22, isToday: false },
  ];

  const shiftsData = {
    1: {
      16: [
        { type: "rh", time: "09:00-17:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      17: [
        { type: "rh", time: "09:00-17:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      18: [
        { type: "rh", time: "09:00-17:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      19: [
        { type: "rh", time: "09:00-17:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      20: [
        { type: "rh", time: "09:00-17:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      21: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
      22: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
    },
    2: {
      16: [
        { type: "rh", time: "08:00-18:00", hours: 10 },
        { type: "ah", hours: "N/A" },
      ],
      17: [
        { type: "rh", time: "08:00-18:00", hours: 10 },
        { type: "ah", hours: "N/A" },
      ],
      18: [
        { type: "rh", time: "08:00-18:00", hours: 10 },
        { type: "ah", hours: "N/A" },
      ],
      19: [
        { type: "rh", time: "08:00-18:00", hours: 10 },
        { type: "ah", hours: "N/A" },
      ],
      20: [
        { type: "rh", time: "08:00-13:00", hours: 5 },
        { type: "ah", hours: "N/A" },
      ],
      21: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
      22: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
    },
    3: {
      16: [
        { type: "rh", time: "10:00-18:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      17: [
        { type: "rh", time: "10:00-18:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      18: [
        { type: "rh", time: "10:00-16:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      19: [
        { type: "rh", time: "10:00-18:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      20: [
        { type: "rh", time: "10:00-18:00", hours: 8 },
        { type: "ah", hours: "N/A" },
      ],
      21: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
      22: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
    },
    4: {
      16: [
        { type: "rh", time: "11:00-18:00", hours: 7 },
        { type: "ah", hours: "N/A" },
      ],
      17: [
        { type: "rh", time: "11:00-18:00", hours: 7 },
        { type: "ah", hours: "N/A" },
      ],
      18: [
        { type: "rh", time: "11:00-18:00", hours: 7 },
        { type: "ah", hours: "N/A" },
      ],
      19: [
        { type: "rh", time: "11:00-18:00", hours: 7 },
        { type: "ah", hours: "N/A" },
      ],
      20: [
        { type: "rh", time: "11:00-18:00", hours: 7 },
        { type: "ah", hours: "N/A" },
      ],
      21: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
      22: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
    },
    5: {
      16: [
        { type: "rh", time: "12:00-18:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      17: [
        { type: "rh", time: "12:00-18:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      18: [
        { type: "rh", time: "12:00-18:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      19: [
        { type: "rh", time: "12:00-18:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      20: [
        { type: "rh", time: "12:00-18:00", hours: 6 },
        { type: "ah", hours: "N/A" },
      ],
      21: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
      22: [
        { type: "rh", time: "", hours: 0 },
        { type: "ah", hours: "N/A" },
      ],
    },
  };

  const getDayShifts = (staffId, dayNum) =>
    shiftsData[staffId]?.[dayNum] || [
      { type: "rh", time: "", hours: 0 },
      { type: "ah", hours: "N/A" },
    ];

  const currentMonth = "June";
  const currentWeekTotal = staff.reduce(
    (acc, member) => acc + member.weekTotal,
    0
  );
  const navigate = useNavigate();

  const rosterClick = () => {
    navigate("/roster");
  };

  const viewRosterClick = () => {
    navigate("/staff-schedule");
  };

  const attendanceClick = () => {
    navigate("/attendance");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-full mx-auto p-4">
        <div className="bg-white shadow-sm">
          <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
            <button
              onClick={rosterClick}
              className="flex-1 py-3 text-center text-gray-600 text-sm"
            >
              Roster Settings
            </button>
            <button
              onClick={viewRosterClick}
              className="flex-1 py-3 text-center text-gray-600 text-sm"
            >
              View Roster
            </button>
            <button
              onClick={attendanceClick}
              className="flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-white rounded-lg text-sm"
            >
              Staff Attendance
            </button>
          </div>
        </div>
        <div className="bg-white px-4 py-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeMonth(-1)}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {currentMonth}
              </h1>
              <button
                onClick={() => changeMonth(1)}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <Download className="inline-block h-4 w-4 mr-2" />
              Export as CSV
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("roster")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium bg-orange-400 `}
            >
              R/H &rarr; Roster Assigned Hours
            </button>
            <button
              onClick={() => setActiveTab("actual")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-medium bg-blue-300 `}
            >
              A/H &rarr; Actual Worked Hours
            </button>
          </div>
        </div>

        <div className="p-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="mb-4 rounded-xl bg-white p-4 shadow-md"
            >
              <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-700">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-gray-900">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-gray-600">
                    Week Total
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {member.weekTotal}
                  </span>
                </div>
              </div>

              <div className="grid grid-flow-col gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {days.map((day) => {
                  const shifts = getDayShifts(member.id, day.num);
                  const isCurrentDay = day.isToday;

                  return (
                    <div
                      key={day.num}
                      className={`min-w-[80px] rounded-lg p-2 text-center transition-all duration-200 ${
                        isCurrentDay
                          ? "border-2 border-blue-600 bg-blue-50"
                          : ""
                      }`}
                    >
                      <div className="mb-2 text-xs font-semibold text-gray-600 leading-tight">
                        {day.short}
                        <br />
                        <span className="block text-base font-extrabold text-gray-900">
                          {day.date}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between rounded-md bg-white p-1 text-xs shadow-sm">
                          <span className="min-w-[24px] rounded bg-orange-100 px-1.5 py-0.5 text-xs font-semibold text-orange-600">
                            R/H
                          </span>
                          <span className="font-bold text-gray-800">
                            {shifts[0].hours}
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-md bg-yellow-50 p-1 text-xs shadow-sm">
                          <span className="min-w-[24px] rounded bg-blue-100 px-1.5 py-0.5 text-xs font-semibold text-blue-600">
                            A/H
                          </span>
                          <span className="font-bold text-gray-800">
                            {shifts[1].hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
