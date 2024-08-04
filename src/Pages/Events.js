import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import './Events.css';

function Events() {
 const[Sidebar,SetSidebar]=useState(true) 
  const [events, setEvents] = useState([]);

  async function fetchData() {
    const sheetId = '1nelhCHogtR-lXbC-d27FJ5y8hzxwcHlU11fnwoggoHc';                                               
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'user-data';
    const query = encodeURIComponent('Select *');
    const url = `${base}&sheet=${sheetName}&tq=${query}`;
    
    const response = await fetch(url, {
      redirect: "follow"
    });
    
    const text = await response.text();
    const colz = [];
    
    const jsonData = JSON.parse(text.substring(47).slice(0, -2));

    const columns = [];
    jsonData.table.rows[0].c.forEach(name => columns.push(name.v.toLowerCase()));    

    const rows = [];
    jsonData.table.rows.slice(1).forEach((rowData) => {
      const row = {};
      rowData.c.forEach((data, idx) => {
        const col = columns[idx];
        if (col === "image") {
          const url = new URL(data.v);
          const path = url.pathname.slice(8, -5);
          row[col] = `https://drive.google.com/thumbnail?id=${path}&sz=w1000`;          
        } else
          row[col] = data.v;
      
      })
      rows.push(row);
    });

    setEvents(rows);
  }

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <div className="center">

          <div className="event-list">
          {events.map(ev => <div className="event-card">
            <h1>{ev.title}</h1>
            <p>{ev.description}</p>
            <img src={`${ev.image}`} />
          </div>)
          }
          </div>
      </div>
    </>
  );
}

export default Events;
