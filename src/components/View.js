import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    var [courselist,setCourse]=useState([])
    var [loadstatus,setLoadStatus]=useState(true)
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
            console.log(response.data)
            setCourse(response.data)
            setLoadStatus(false)
        }
    )
  return (
    
<div>
        <Navbar/>
        <div className="container">
        <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        {loadstatus ?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<table class="table table-primary table-striped">         
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">courseTitle:</th>
              <th scope="col">courseDuration</th>
              <th scope="col">courseDescription</th>
              <th scope="col">courseVenue</th>
              <th scope="col">courseDate</th>
            </tr>
          </thead>
          <tbody>
                
                    {courselist.map((value,key)=>{
        return <tr>
              <th scope="row">1</th>
              <td>{value.courseTitle}</td>
              <td>{value.courseDescription}</td>
              <td>{value.courseDuration}</td>
              <td>{value.courseVenue}</td>
              <td>{value.courseDate}</td>
            </tr>
           
                    })}
        
                      </tbody>
        </table>
        }
        </div>
        </div>
        </div>
        </div>


  )
}

export default View