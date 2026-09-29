import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"

const Journal = (props) => {
  const[search,setSearch]=useState("");
  const myJournals=props.journals;
  const searchedJournals=myJournals.filter((journal)=>journal.title.toLowerCase().includes(search.toLowerCase()));
  console.log(props.journals);
  let journalStyle={
    marginLeft:"30px",
    fontSize:"15px"
  }
  const[showEdit,setShowEdit]=useState(false);
  const[editTitle,setEditTitle]=useState("");
  const[editDate,setEditDate]=useState("");
  const[editThoughts,setEditThoughts]=useState("");
  const[editSno,setEditSno]=useState(null);
  
  return (
    <div style={journalStyle}>
      <br></br>
      <div style={{width:"300px", height:"70px"}}>
        <div>
          <div style={{ fontSize: "25px", height: "10px" }}>
            <b>Journal</b>
          </div>
          <br></br>Write your thoughts.Reflect.Grow.
        </div>
        <div style={{ marginLeft: "500px", marginTop:"60px"}}>
          <Link to="/addjournal">
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
              + New Entry
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <div
        style={{ backgroundColor: "#F8F9FA", width: "890px", height:"500px" }}
      >
        <div style={{ marginLeft: "10px" }}>
          <br></br>
          <input
            type="text"
            placeholder="Search journal..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
        <div>
          <br></br>
          {searchedJournals.length === 0 ? (
            <div style={{ marginLeft: "50px" }}>No Journals To Display</div>
          ) : (
            searchedJournals.map((journal) => (
              <div
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  width: "860px",
                  marginLeft: "10px",
                  marginTop: "10px",
                  padding: "10px",
                  paddingLeft: "10px",
                  display: "flex",
                }}
                key={journal?.sno}
              >
                <div style={{ width: "700px" }}>
                  <h3>{journal.title}</h3>
                  <p>
                    {journal.date}
                    <br></br>
                    {journal.thoughts.length >= 80
                      ? journal.thoughts.slice(0, 80) + "..."
                      : journal.thoughts}
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      props.onDeleteJournal(journal);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "purple", color: "white" }}
                    onClick={() => {setShowEdit(true), setEditTitle(journal.title), setEditDate(journal.date), setEditThoughts(journal.thoughts), setEditSno(journal?.sno)}}
                  >
                    Edit
                  </button>
                </div>
                {showEdit ? (
                  <div
                    style={{
                      position: "fixed",
                      height: "100vh",
                      width: "100vw",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      top: "0px",
                      left: "0px",
                      padding: "30px",
                    }}
                  >
                    <div
                      style={{
                        width: "40vw",
                        height: "90vh",
                        backgroundColor: "white",
                        marginLeft: "400px",
                        padding:"50px"
                      }}
                      key={journal?.sno}
                    >
                      <div style={{marginLeft:"130px", height:"40px"}}><h4><u>Edit Journal</u></h4></div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter a title..."
                          style={{ width: "400px" }}
                          value={editTitle}
                          onChange={(e)=>setEditTitle(e.target.value)}
                        />
                      </div>
                      <br></br>
                            <div className="mb-3">
                              <label htmlhtmlhtmlFor="exampleFormControlInput1" className="form-label">
                                Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter a title..."
                                style={{ width: "400px" }}
                                value={editDate}
                                onChange={(e)=>setEditDate(e.target.value)}
                              />
                            </div>
                            <br></br>
                            <div className="mb-3">
                              <label htmlhtmlhtmlFor="exampleFormControlTextarea1" className="form-label">
                                Your Thoughts
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Start writing..."
                                style={{ width: "400px" }}
                                value={editThoughts}
                                onChange={(e)=>setEditThoughts(e.target.value)}
                              ></textarea>
                            </div>
                            <div style={{marginLeft:"120px"}}><button onClick={()=>setShowEdit(false)} style={{backgroundColor: "white",
                                      color: "black",
                                      fontSize: "17px",
                                      paddingLeft: "10px",
                                      paddingRight:"10px",
                                      borderRadius: "8px"}}>Cancel</button><button style={{backgroundColor: "rgb(129, 52, 211)",
                                      color: "white",
                                      border: "none",
                                      fontSize: "15px",
                                      padding: "5px",
                                      borderRadius: "8px",
                                      paddingLeft: "10px",
                                      paddingRight:"10px",
                                      marginLeft:"10px"}} type="submit" onClick={()=>{const updatedJournal=props.journals.map((j)=>{if(j?.sno===editSno){ return {...j, title:editTitle, date:editDate, thoughts:editThoughts}}else{return j;}});props.onEditJournal(updatedJournal);setShowEdit(false);console.log("BEFORE:", props.journals);console.log("AFTER:", updatedJournal);}}>Save Entry</button></div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default Journal
