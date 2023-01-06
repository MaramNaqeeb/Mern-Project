

import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton';
import Header from './Header'
function List(props) {



    return (
      <div>
      <h4>All Dentists</h4>
      <table className="container" class="table table-hover" style={{width:"50%", margin:" 70px 450px" }}>
      <thead style={{backgroundColor:"#b0d5e9"}}>
        <tr>
          <th scope="col">Dentist</th>
          <th scope="col">City</th>
          <th scope="col">Recommened by</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody >
     
        

          {props.dentists.map((dentist, idx) => {
                return (
                    <tr style={{border:"0.2px  solid blue "}}  key={idx}>
                          <Link to={"/" +dentist._id}>
                          <td >{dentist.fname} {dentist.lname}</td>

                      </Link>
                              <td>{dentist.city}</td>
                              <td>{dentist.recommened} people</td>
                           <td style={{display:"flex", justifyContent:"space-around"}}>
                        <Link to={"/edit/" + dentist._id }>
                            Edit
                        </Link> 
                      
                       <DeleteButton  dentistId={dentist._id} successCallback={()=>props.removeFromDom(dentist._id)}/>
                       </td>
                       
                </tr>
          

                   
                )
            })
            
            }
        
      </tbody>
    </table>
    </div>

    )
}

export default List;