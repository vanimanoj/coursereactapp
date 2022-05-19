import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Courseentry = () => {
    var [title,setTitle]=useState("")
    var [duration,setDuration]=useState("")
    var [description,setDescription]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    const subData=()=>{
        const data={"title":title,"duration":duration,"description":description,"venue":venue,"date":date}
        console.log(data)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                {
            alert("succesfully added")
                }
                else
                {
                    alert("failed to add")
                }
            }
        )
            }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CourseTitle</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Duration</label>
                    <input onChange={(e)=>{setDuration(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <input onChange={(e)=>{setDescription(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Courseentry