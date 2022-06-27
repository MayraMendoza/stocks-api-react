import React from 'react'
import { useApiDataContext } from '../providers/ApiDataProvider'
import { StockOverview } from './StockOverview';

export const ApiDataDiv = (props) => {
    const{data}= useApiDataContext();
  return (
    
    <div style={{...props.style}}>
       <h2>Data</h2> 
       {/* {JSON.stringify(data, null, 2)} */}
       //check that this is an array (data.length ) incase theres multiple objects being returned
       // data.map will return an array of elements based on an existing array. 
       {data.length >0 ? data.map(stock => {return(
            <StockOverview data ={stock}/>
        
       )}): null}
     </div>
  )
}
