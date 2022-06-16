import React from 'react'
import axios from 'axios'
import { Api_key} from '../Constants'
import {useState,useEffect}from 'react'

function PetrolApi() {
    const[storeApi,setstoreApi]=useState([])
    useEffect(()=>{
        axios.get(`https://api.data.gov.in/resource/e336a512-2dfe-4e4b-8d00-bc1b11e41964?api-key=${Api_key}&format=json`).then(response=>{
            setstoreApi(response.data.records)
            console.log(response.data.records)
        })
    },[])
    
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-primary table-bordered table-striped'>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Average Petrol Rupees Per Litre</td>
                        <td>Average Disesel Rupees Per Litre</td>
                    </tr>
                </thead>
                <tbody>
                   {
                    storeApi.map((itm,k)=>{
                        return(
                        <tr>
                            <td>{itm._year}</td>
                            <td>{itm.petrol__rs__litre_}</td>
                            <td>{itm.diesel__rs__litre_}</td>
                        </tr>
                        )
                    })
                   }
                     
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PetrolApi