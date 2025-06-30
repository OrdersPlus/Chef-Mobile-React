import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Search, Clock, Users, Edit3, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const StaffScheduleDay= () => {
  const [selectedDay, setSelectedDay] = useState(18);
  const [viewMode, setViewMode] = useState('day');
  
  const staff = [
    { id: 1, name: 'Gabriel', surname: 'Greenwood', role: 'Chef', avatar: '👨‍🍳', status: 'scheduled' },
    { id: 2, name: 'Adam Co', surname: '', role: 'Head Chef', avatar: '👨‍🍳', status: 'scheduled' },
    { id: 3, name: 'Alexa Huson', surname: '', role: 'Chef de Partie', avatar: '👩‍🍳', status: 'scheduled' },
    { id: 4, name: 'Jessica Norman', surname: '', role: 'Sushi Chef', avatar: '👩‍🍳', status: 'scheduled' },
    { id: 5, name: 'Arthur Leung', surname: '', role: 'Commis Chef', avatar: '👨‍🍳', status: 'scheduled' },
    { id: 6, name: 'Sam Harris', surname: '', role: 'Section Chef', avatar: '👨‍🍳', status: 'off' }
  ];

  const days = [
    { num: 16, day: 'Monday', short: 'Mon' },
    { num: 17, day: 'Tuesday', short: 'Tue' },
    { num: 18, day: 'Wednesday', short: 'Wed' },
    { num: 19, day: 'Thursday', short: 'Thu' },
    { num: 20, day: 'Friday', short: 'Fri' },
    { num: 21, day: 'Saturday', short: 'Sat' },
    { num: 22, day: 'Sunday', short: 'Sun' }
  ];

  // Sample shifts data for Wednesday (18th)
  const dayShifts = {
    1: [{ id: 1, startTime: '09:00', endTime: '17:00', hours: 8, break: '1h', position: 'Kitchen Lead' }],
    2: [{ id: 2, startTime: '08:00', endTime: '18:00', hours: 10, break: '1h', position: 'Head Chef' }],
    3: [{ id: 3, startTime: '10:00', endTime: '16:00', hours: 6, break: '30min', position: 'Prep Station' }],
    4: [{ id: 4, startTime: '11:00', endTime: '18:00', hours: 7, break: '1h', position: 'Sushi Bar' }],
    5: [{ id: 5, startTime: '12:00', endTime: '18:00', hours: 6, break: '30min', position: 'Commis' }],
    6: [] // Off day
  };

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const getCurrentDay = () => {
    return days.find(d => d.num === selectedDay);
  };

  const getTotalDayHours = () => {
    return Object.values(dayShifts).reduce((total, shifts) => {
      return total + shifts.reduce((shiftTotal, shift) => shiftTotal + shift.hours, 0);
    }, 0);
  };

  const getStaffShift = (staffId) => {
    return dayShifts[staffId] || [];
  };

  const isStaffWorking = (staffId, time) => {
    const shifts = getStaffShift(staffId);
    return shifts.some(shift => {
      const startHour = parseInt(shift.startTime.split(':')[0]);
      const endHour = parseInt(shift.endTime.split(':')[0]);
      const currentHour = parseInt(time.split(':')[0]);
      return currentHour >= startHour && currentHour < endHour;
    });
  };
  
  const navigate = useNavigate(); 
        
          const rosterClick = () => {
      navigate('/admin/roster'); 
    };
          
          const viewRosterClick = () => {
            navigate('/admin/roster/view'); 
          };
  
          const attendanceClick=() =>{
            navigate('/admin/roster/staff-attendance')
          };
  
          const weekClick=() =>{
            navigate('/admin/roster/view')
          };


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-full mx-auto p-4">
        
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
        <button onClick={ rosterClick}
         className="flex-1 py-3 text-center text-gray-600 text-sm">Roster Settings</button>
        <button onClick={viewRosterClick} 
        className=" flex-1 py-3 text-center text-white font-semibold bg-orange-500 border-b-2 border-white rounded-lg text-sm">View Roster</button>
        <button onClick={attendanceClick}
        className="flex-1 py-3 text-center text-gray-600 text-sm">Staff Attendance</button>
      </div>

        
        <div className="px-4 py-4">
          {/* Search and Navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search staff..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Current Day Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {getCurrentDay()?.day}, June {selectedDay}
            </h2>
            <p className="text-sm text-gray-500">{getTotalDayHours()} total hours scheduled</p>
          </div>

          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
            <button
              onClick={weekClick}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                viewMode === 'week'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Week View</span>
            </button>
            <button
              onClick={() => setViewMode('day')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                viewMode === 'day'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Day View</span>
            </button>
          </div>

          {/* Days Selector */}
          <div className="flex space-x-1 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day.num}
                onClick={() => setSelectedDay(day.num)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl text-center min-w-[80px] transition-all ${
                  selectedDay === day.num
                    ? 'bg-green-100 text-green-700 border-2 border-green-200'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="text-xs font-medium text-gray-500 mb-1">{day.short}</div>
                <div className="text-lg font-semibold">{day.num}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Day View Content */}
      <div className="px-4 py-4 pb-20 space-y-3">
        {staff.map((member) => {
          const shifts = getStaffShift(member.id);
          const isWorking = shifts.length > 0;
          
          return (
            <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
              {/* Staff Header */}
              <div className="p-4 border-b border-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                        <img 
                          src="/api/placeholder/48/48" 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        isWorking ? 'bg-green-400' : 'bg-gray-300'
                      }`}></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {member.name} {member.surname}
                      </h3>
                      <p className="text-sm text-teal-600 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {isWorking ? (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">
                          {shifts[0].hours}h scheduled
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">Day off</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Shift Details or Add Shift */}
              <div className="p-4">
                {isWorking ? (
                  <div className="space-y-3">
                    {shifts.map((shift) => (
                      <div key={shift.id} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span className="font-semibold text-blue-900">
                                {shift.startTime} - {shift.endTime}
                              </span>
                              <span className="text-sm text-blue-700">
                                ({shift.hours}h)
                              </span>
                            </div>
                            <p className="text-sm text-blue-800 font-medium mb-1">
                              {shift.position}
                            </p>
                            <p className="text-xs text-blue-600">
                              Break: {shift.break}
                            </p>
                          </div>
                          <div className="flex space-x-1 ml-2">
                            <button className="p-1.5 rounded bg-blue-100 hover:bg-blue-200 transition-colors">
                              <Edit3 className="w-3 h-3 text-blue-600" />
                            </button>
                            <button className="p-1.5 rounded bg-red-100 hover:bg-red-200 transition-colors">
                              <Trash2 className="w-3 h-3 text-red-600" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Timeline Bar */}
                        <div className="mt-3">
                          <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                            <span>8AM</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span>12PM</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span>6PM</span>
                          </div>
                          <div className="relative h-2 bg-gray-200 rounded-full">
                            <div 
                              className="absolute h-2 bg-blue-500 rounded-full"
                              style={{
                                left: `${((parseInt(shift.startTime.split(':')[0]) - 8) / 12) * 100}%`,
                                width: `${(shift.hours / 12) * 100}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200">
                    <div className="flex items-center justify-center space-x-2">
                      <Plus className="w-5 h-5" />
                      <span className="text-sm font-medium">Add Shift</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Day Total - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              {getCurrentDay()?.day} Total
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">{getTotalDayHours()} Hours</span>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default StaffScheduleDay;