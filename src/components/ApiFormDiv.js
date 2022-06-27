import React, {useState} from 'react';
import axios from 'axios'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiFormDiv = (props) => {
    const BASE_URI = "http://localhost:4001/api/overview/"

    const [formData, setFormData] = useState({query: '', selectedQueryQuery: 'all', uploadInput: ''})
    
    const{setData} = useApiDataContext();
    const {selectedQuery, query, uploadInput} =formData

    // make an array of options that will not need box when selectedQuery ?

    const noQueryOptions= ['all']


    const requestData=() =>{
        // console.log("Requesting Data...");
        const url = BASE_URI + (noQueryOptions.includes(selectedQuery) ? selectedQuery: selectedQuery + "/" + query)
        console.log(url);

        axios.get(url)
        .then( res =>{
            setData(res.data)
            console.log(res.data);
            // alert("Request was successful")
        })
        .catch( err => {
            alert("Error:\n" + err.message)
            console.log(err)
        })

    }
    const deleteAllResources=() =>{
        // console.log("Requesting Data...");

        axios.delete(BASE_URI +"all")
        .then( res =>{
            setData([])
            alert("Delete all Resources:\n"+ res.data)
            console.log(res.data);
            // alert("Request was successful")
        })
        .catch( err => {
            alert("Error:\n" + err.message)
            console.log(err)
        })
    }
    const uploadTestResources=() =>{

        axios.post(BASE_URI +"testUpload")
        .then( res =>{
            setData(res.data)
            alert("Uploaded Test Resources")
            console.log(res.data);
            // alert("Request was successful")
        })
        .catch( err => {
            alert("Error:\n" + err.message)
            console.log(err)
        })
    }


    return (
      
      <div style={{...props.style}}>
         <h2>API Form</h2>
         <select value={selectedQuery} onChange={e=>{setFormData({...formData, selectedQueryQuery: e.target.value})}}>
            <option value="all">All</option>
            <option value="exchange">By Exchange</option>
            <option value="symbol">By symbol</option>
            <option value="markeyCapgte">Markey Cap Greater Than</option>
            <option Value="yearhighgte">Year Gigh Greater Than</option>
            <option value="ddbefore">Dividend Data Before yyyy-mm-dd</option>
         </select>
         <input 
         style={{textAlign: 'center', display: noQueryOptions.includes(selectedQuery) ? 'none': 'initial'}}
         type='text'
         id= 'text-input'
         placeholder='Search Data'
         value={query}
         onChange={e=>{setFormData({...formData, query: e.target.value})}}
         />
         <button
            style={{marginTop: 10}}
            onClick={requestData}
            >
                
               Request Data
         </button>
         <button
            style={{marginTop: 10}}
            onClick={deleteAllResources}
            >
               Delete All Data
         </button>
         <button
            style={{marginTop: 10}}
            onClick={uploadTestResources}
            >
               upload test data 
         </button>
         <input 
            style={{textAlign: 'center', marginTop: 50}}
            type='text'
            id= 'text-input'
            placeholder='Upload Input'
            value={query}
            onChange={e=>{setFormData({...formData, uploadInput: e.target.value})}}
         />
         <button
            style={{marginTop: 10}}
            onClick={uploadTestResources}
            >
               upload Resource By Input
         </button>
       </div>
    )
  }

