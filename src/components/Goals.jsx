import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"

export default function Goals(props) {
  const[search,setSearch]=useState("");
      const myGoals=props.goals;
      const searchedGoals=myGoals.filter((goal)=>goal.title.toLowerCase().includes(search.toLowerCase()));
      console.log(props.goals);
      let goalsStyle={
        marginLeft:"30px",
        fontSize:"15px"
      }
    localStorage.setItem("totalGoals",JSON.stringify(props.goals.length));
    console.log(props.goals.length);
  return (
    
      <div style={goalsStyle}>
            <br></br>
            <div style={{ display: "flex" }}>
              <div>
                <div style={{ fontSize: "25px", height: "10px" }}>
                  <b>Goals</b>
                </div>
                <br></br>Dream big. Grow every day.
              </div>
              <div style={{ marginLeft: "500px", marginTop: "20px" }}>
                <Link to="/addgoal">
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
                    + Add Goal
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
                  placeholder="Search goal..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
              </div>
              <div>
                <br></br>
                {searchedGoals.length === 0 ? (
                  <div style={{ marginLeft: "50px" }}>No Goals To Display</div>
                ) : (
                  searchedGoals.map((goal) => (
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
                      key={goal?.sno}
                    >
                      <div style={{ width: "700px" }}>
                        <h4>{goal.title}</h4>
                        
                      </div>
                      <div style={{ marginTop: "2px" }}>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            props.onDeleteGoal(goal);
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
    
  )
}
