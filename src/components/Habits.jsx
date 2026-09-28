import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"

const Habits = (props) => {
  const[search,setSearch]=useState("");
    const myHabits=props.habits;
    const searchedHabits=myHabits.filter((habit)=>habit.title.toLowerCase().includes(search.toLowerCase()));
    console.log(props.habits);
    let habitsStyle={
      marginLeft:"30px",
      fontSize:"15px"
    }
  localStorage.setItem("totalHabits",JSON.stringify(props.habits.length));
  console.log(props.habits.length);
  return (
      <div style={habitsStyle}>
            <br></br>
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ fontSize: "25px", height: "10px" }}>
                  <b>Habits</b>
                </div>
                <br></br>Small habits.Big changes.
              </div>
              <div style={{ marginLeft: "500px", marginTop: "20px" }}>
                <Link to="/addhabit">
                  <button
                    style={{
                      backgroundColor: "rgb(129, 52, 211)",
                      color: "white",
                      border: "none",
                      fontSize: "15px",
                      padding: "5px",
                      borderRadius: "8px",
                      width: "100px",
                    }}
                  >
                    + Add Habit
                  </button>
                </Link>
              </div>
            </div>
            <br></br>
            <div
              style={{ backgroundColor: "#F8F9FA", height: "100vh", width: "890px" }}
            >
              <div style={{ marginLeft: "10px" }}>
                <br></br>
                <input
                  type="text"
                  placeholder="Search habit..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
              </div>
              <div>
                <br></br>
                {searchedHabits.length === 0 ? (
                  <div style={{ marginLeft: "50px" }}>No Habits To Display</div>
                ) : (
                  searchedHabits.map((habit) => (
                    <div
                      style={{
                        backgroundColor: "white",
                        height: "50px",
                        width: "860px",
                        marginLeft: "10px",
                        marginTop: "10px",
                        padding: "10px",
                        paddingLeft: "10px",
                        display: "flex",
                      }}
                      key={habit.sno}
                    >
                      <div style={{ width: "700px" }}>
                        <h4>{habit.title}</h4>
                        
                      </div>
                      <div style={{ marginTop: "2px" }}>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            props.onDeleteHabit(habit);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      
                      
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
                      
    
  );
}
export default Habits
