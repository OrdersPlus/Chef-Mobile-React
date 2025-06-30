import { ChevronLeft, ChevronRight, Plus, Search, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeCommonButton } from '../../components/common/ThreeCommonButton';


const StaffSchedule = () => {
  const [viewMode, setViewMode] = useState('week');
  
  const staff = [
    { id: 1, name: 'Gabriel', surname: 'Greenwood', role: 'Chef', avatar: '👨‍🍳', totalHours: 40 },
    { id: 2, name: 'Adam Co', surname: '', role: 'Head Chef', avatar: '👨‍🍳', totalHours: 45 },
    { id: 3, name: 'Alexa Huson', surname: '', role: 'Chef de Partie', avatar: '👩‍🍳', totalHours: 38 },
    { id: 4, name: 'Jessica Norman', surname: '', role: 'Sushi Chef', avatar: '👩‍🍳', totalHours: 35 },
    { id: 5, name: 'Arthur Leung', surname: '', role: 'Commis Chef', avatar: '👨‍🍳', totalHours: 30 },
    { id: 6, name: 'Sam Harris', surname: '', role: 'Section Chef', avatar: '👨‍🍳', totalHours: 42 }
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

  // Sample shifts data
  const shifts = {
    1: { // Gabriel
      16: [{ time: '09:00-17:00', hours: 8 }],
      17: [{ time: '09:00-17:00', hours: 8 }],
      18: [{ time: '09:00-17:00', hours: 8 }],
      19: [{ time: '09:00-17:00', hours: 8 }],
      20: [{ time: '09:00-17:00', hours: 8 }],
      21: [],
      22: []
    },
    2: { // Adam Co
      16: [{ time: '08:00-18:00', hours: 10 }],
      17: [{ time: '08:00-18:00', hours: 10 }],
      18: [{ time: '08:00-18:00', hours: 10 }],
      19: [{ time: '08:00-18:00', hours: 10 }],
      20: [{ time: '08:00-13:00', hours: 5 }],
      21: [],
      22: []
    },
    3: { // Alexa
      16: [{ time: '10:00-18:00', hours: 8 }],
      17: [{ time: '10:00-18:00', hours: 8 }],
      18: [{ time: '10:00-16:00', hours: 6 }],
      19: [{ time: '10:00-18:00', hours: 8 }],
      20: [{ time: '10:00-18:00', hours: 8 }],
      21: [],
      22: []
    },
    4: { // Jessica
      16: [{ time: '11:00-18:00', hours: 7 }],
      17: [{ time: '11:00-18:00', hours: 7 }],
      18: [{ time: '11:00-18:00', hours: 7 }],
      19: [{ time: '11:00-18:00', hours: 7 }],
      20: [{ time: '11:00-18:00', hours: 7 }],
      21: [],
      22: []
    },
    5: { // Arthur
      16: [{ time: '12:00-18:00', hours: 6 }],
      17: [{ time: '12:00-18:00', hours: 6 }],
      18: [{ time: '12:00-18:00', hours: 6 }],
      19: [{ time: '12:00-18:00', hours: 6 }],
      20: [{ time: '12:00-18:00', hours: 6 }],
      21: [],
      22: []
    },
    6: { // Sam
      16: [{ time: '09:00-17:00', hours: 8 }],
      17: [{ time: '09:00-17:00', hours: 8 }],
      18: [{ time: '09:00-17:00', hours: 8 }],
      19: [{ time: '09:00-17:00', hours: 8 }],
      20: [{ time: '14:00-22:00', hours: 8 }],
      21: [{ time: '14:00-20:00', hours: 6 }],
      22: []
    }
  };

  const getTotalWeekHours = () => {
    return staff.reduce((total, member) => total + member.totalHours, 0);
  };

  const getDayShift = (staffId, dayNum) => {
    return shifts[staffId]?.[dayNum] || [];
  };


  const navigate = useNavigate(); 
      
        const dayClick=() =>{
          navigate('/day-staff')
        };

  

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-full mx-auto p-4">
        
      <div className="bg-white shadow-sm top-0 z-10">
        <ThreeCommonButton
        firstBtn= "Roster Setting"
        firstUrl= "/admin/roster"
        secondBtn= "View Roster"
        secondUrl= "/admin/roster/view"
        thirdBtn= "Staff Attendance"
        thirdUrl= "/admin/roster/staff-attendance"
        />
        <div className="px-4 py-4">
          <div class="flex justify start">
  <button onClick={() => document.getElementById('edit_modal').showModal()}
  className="flex items-center px-4 py-2 gap-4 bg-orange-500 text-white rounded-md shadow-md text-xs">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
    Enroll Staff
  </button>
</div>

          
          <div className="flex items-center justify-between mb-4 mt-4">
            
            
            <div className="relative flex-1 mr-4  ">
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

          {/* Week Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">June 2025</h2>
            <p className="text-sm text-gray-500">Week 16-22</p>
          </div>

         
          <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
            <button
              onClick={() => setViewMode('week')}
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
              onClick={dayClick}
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
        </div>
      </div>

      

      {/* Week View Content */}
      <div className="px-4 py-4 pb-20">
        {/* Days Header */}
        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-x-auto">
          <div className="flex min-w-[800px]">
            <div className="w-32 p-3 border-r border-gray-100 bg-gray-50">
              <span className="text-sm font-medium text-gray-700">Staff</span>
            </div>
            {days.map((day) => (
              <div key={day.num} className={`flex-1 p-3 text-center border-r border-gray-100 last:border-r-0 ${
                day.num === 18 ? 'bg-green-50' : ''
              }`}>
                <div className="text-xs text-gray-500 mb-1">{day.short}</div>
                <div className={`text-sm font-medium ${day.num === 18 ? 'text-green-700' : 'text-gray-900'}`}>
                  {day.num}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Rows */}
        <div className="space-y-2">
          {staff.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-x-auto">
              <div className="flex min-w-[800px]">
                {/* Staff Info */}
                <div className="w-32 p-3 border-r border-gray-100 bg-gray-50">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mb-2 overflow-hidden">
                      <img 
                        src="https://res.cloudinary.com/dnawewlz7/image/upload/v1/Restaurant%20Tech%20Files/ordersplus/afrbbciydcc8tgpxgxob" 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs font-medium text-gray-900 text-center">
                      {member.name}
                    </div>
                    <div className="text-xs text-teal-600 text-center">
                      {member.role}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-700">{member.totalHours}h</span>
                    </div>
                  </div>
                </div>

                {/* Days */}
                {days.map((day) => {
                  const dayShifts = getDayShift(member.id, day.num);
                  return (
                    <div key={day.num} className={`flex-1 p-2 border-r border-gray-100 last:border-r-0 min-h-[100px] ${
                      day.num === 18 ? 'bg-green-50' : ''
                    }`}>
                      {dayShifts.length > 0 ? (
                        <div className="space-y-1">
                          {dayShifts.map((shift, index) => (
                            <div key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">
                              <div className="font-medium">{shift.time}</div>
                              <div className="text-blue-600">{shift.hours}h</div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <button className="w-full h-full min-h-[60px] border border-dashed border-gray-200 rounded-md text-gray-400 hover:border-orange-300 hover:text-orange-500 hover:bg-orange-50 transition-all">
                          <Plus className="w-4 h-4 mx-auto" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Week End Total - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">Week End Total</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{getTotalWeekHours()} Hours</span>
            </div>
          </div>
        </div>
         
      </div>
     </main>
     <dialog id="edit_modal" className="modal">
  <div className="modal-box max-w-4xl">
    <h3 className="font-bold text-lg mb-4">Edit Staff List</h3>

    <table className=" text-gray-700 shadow-gray-300">
      <thead
        className="bg-white text-sm shadow-gray-300"
        style={{ boxShadow: 'inset 0px 0px 3px #d1d1d1, 1px 1px 8px #54545466' }}
      >
        <tr>
          <th className="py-2 px-4 text-left"></th>
         
          <th className="py-2 px-4 text-left text-orange-500">Full Name</th>
          <th className="py-2 px-4 text-left text-orange-500">Position</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr>
          {/* Checkbox */}
          <td className="py-3 px-4">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-warning" />
          </td>

          
          {/* Name */}
          <td className="py-3 font-semibold w-40 text-black px-2">Alex Hales</td>

          {/* Position */}
          <td className="py-2 w-40 text-black px-4">Chef</td>
        </tr>

      
      </tbody>
    </table>

    <div className="modal-action mt-6">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default StaffSchedule;