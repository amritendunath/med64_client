import * as React from "react"
import { useState, useEffect } from "react"
import { SearchForm } from "../pages/search-form"
import { VersionSwitcher } from "../pages/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../components/ui/sidebar"
import "../styles/styles.css"
import "../components/styles/App.css";
import geneticSvg from '../genetic-data-svgrepo-com.svg'


const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [

    {
      title: "Appointment Booking History",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        }
      ],
    },
    {
      title: "Chat History",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        }
      ],
    },
  ],
}

export function AppSidebar({ onSelectChatSession }) {
  const [chatSessions, setChatSessions] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chat sessions from the server
        //   const chatSessionsResponse = await fetch(`${process.env.REACT_APP_POINT_AGENT}/api/v1/generate-stream/chat-sessions`, {
        //     method: 'GET',
        //     headers: {
        //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
        //     }
        //   });
        //   const text = await chatSessionsResponse.text()
        //   console.log("RAW RESPONSE TEXT:", text);
        //   const chatSessionsData = await chatSessionsResponse.json();
        //   console.log("chatSessionsData:", chatSessionsData);

        //   if (chatSessionsData.sessions) {
        //     const sortedSessions = chatSessionsData.sessions.sort((a, b) =>
        //       new Date(b.timestamp) - new Date(a.timestamp)
        //     );
        //     setChatSessions(sortedSessions);
        //   }
        // } catch (error) {
        //   console.error('Error fetching chat sessions:', error);
        // }
        const chatSessionsResponse = await fetch(`${process.env.REACT_APP_POINT_AGENT}/api/v1/generate-stream/chat-sessions`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        });

        const text = await chatSessionsResponse.text();
        console.log("RAW RESPONSE TEXT:", text);

        try {
          const chatSessionsData = JSON.parse(text);
          console.log("chatSessionsData:", chatSessionsData);

          if (chatSessionsData.sessions) {
            const sortedSessions = chatSessionsData.sessions.sort((a, b) =>
              new Date(b.timestamp) - new Date(a.timestamp)
            );
            setChatSessions(sortedSessions);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle the error appropriately, e.g., display an error message to the user
        }
      } catch (error) {
        console.error('Error fetching chat sessions:', error);
      }
      try {
        // Fetch appointments from the server
        const appointmentsResponse = await fetch(`${process.env.REACT_APP_POINT_AGENT}/api/v1/generate-stream/appointment/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        const appointmentsData = await appointmentsResponse.json();

        if (appointmentsData.appointments) {
          console.log('Appointments loaded:', appointmentsData.appointments);
          setAppointments(appointmentsData.appointments);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchData();
  }, [onSelectChatSession]);
  // useEffect(() => {
  //   // Fetch chat sessions from the server
  //   fetch('http://localhost:8000/api/v1/generate-stream/chat-sessions', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // if (data.sessions) {
  //       //   console.log('Received sessions:', data.sessions); // Add this for debugging
  //       //   setChatSessions(data.sessions);
  //       // }
  //       if (data.sessions) {
  //         // Sort sessions by timestamp in descending order
  //         const sortedSessions = data.sessions.sort((a, b) =>
  //           new Date(b.timestamp) - new Date(a.timestamp)
  //         );
  //         setChatSessions(sortedSessions);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching chat sessions:', error));

  //   fetch('http://localhost:8000/api/v1/generate-stream/appointment/', {  // Note the trailing slash
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data.appointments) {
  //         console.log('Appointments loaded:', data.appointments);
  //         setAppointments(data.appointments);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching appointments:', error);
  //     });
  // }, [onSelectChatSession]);




  return (
    // Replaced custom Sidebar component with <aside> and applied styles from index.html
    <aside className="bg-[#141820] flex flex-col justify-between p-4 text-white h-screen">
      <div >
        {/* Copilot logo and text section from index.html */}
        <div className="flex items-center gap-2 mb-6">
          <img
            alt="Copilot logo with blue, purple, and pink gradient shapes"
            className="w-5 h-5"
            height="20"
            src={geneticSvg}
            width="20"
          />
          <span className="font-semibold text-white text-base select-none">
            Sathi 1.0 {/* Changed text to Sathi 1.0 */}
          </span>
          {/* Removed extra buttons from index.html example if not needed */}
          {/* <button className="ml-2 text-white opacity-80 hover:opacity-100">
            <i className="fas fa-book-open text-sm"></i>
          </button>
          <button className="ml-1 text-white opacity-80 hover:opacity-100">
            <i className="fas fa-pen-nib text-sm"></i>
          </button>
          <button className="ml-1 text-white opacity-80 hover:opacity-100">
            <i className="fas fa-check text-sm"></i>
          </button>
          <button className="ml-1 text-white opacity-80 hover:opacity-100">
            <i className="fas fa-caret-down text-sm"></i>
          </button> */}
        </div>
      </div>
      <div className="text-sm text-gray-400 mb-3 select-none">
        Previous Chats
        <i className="fas fa-book-open text-sm ml-2"></i>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-side">
        <div className="flex flex-col text-xs overflow-y-auto"
        >
          {chatSessions && chatSessions.length > 0 ? (
            chatSessions.map((session) => (
              // Replaced SidebarMenuItem and SidebarMenuButton with a button
              <button
                key={session.session_id}
                className="text-xs  text-white mb-2 text-left truncate w-full hover:underline" // Applied styles from index.html button
                onClick={() => onSelectChatSession(session.session_id)}
                type="button"
              >
                {/* Display session title and timestamp */}
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300 font-semibold">
                    {session.title || `Chat Session ${session.session_id.slice(-4)}`} {/* Added fallback title */}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(session.timestamp).toLocaleString()}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500 text-sm"> {/* Simplified styling */}
              No chat sessions yet
            </div>
          )}
        </div>
      </div>
      <div className="text-xs font-semibold text-white mb-1 mt-3 select-none">
        Upcoming Appointments
      </div>
      <div className="mt-3 flex-shrink-0">

        {/* Replaced SidebarMenu and its content structure */}
        <div className="flex flex-col space-y-3"> {/* Added space-y-3 for spacing between items */}
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => (
              // Replaced SidebarMenuItem and SidebarMenuButton with a button
              <button
                key={appointment.appointment_date} // Using date as key, consider a unique ID if available
                className="w-full text-left p-2 hover:bg-[#1e2233] transition-all duration-200 rounded-md border border-gray-700/30 hover:border-gray-700/50 hover:shadow-lg " // Applied simplified styling
                type="button"
              >
                <div className="flex flex-col space-y-1"> {/* Adjusted spacing */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-400">Dr. {appointment.doctor_name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${ // Adjusted padding
                      appointment.status === 'confirmed'
                        ? 'bg-green-500/20 text-green-400'
                        : appointment.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(appointment.appointment_date).toLocaleString()}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-4 text-gray-500 text-sm bg-gray-800/20 rounded-md border border-gray-700/30"> {/* Simplified styling */}
              <p className="text-sm">No upcoming appointments</p>
            </div>
          )}
        </div>
      </div>
      {/* Previous Chat Sessions Section */}
      {/* Replaced SidebarGroupLabel with div and applied styles */}


      {/* Upcoming Appointments Section */}
      {/* Replaced SidebarGroupLabel with div and applied styles */}
      {/* Added margin-top to separate from chat sessions */}

    </aside>


  );
}

