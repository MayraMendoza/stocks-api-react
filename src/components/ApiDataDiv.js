import React from 'react'
import { useApiDataContext } from '../providers/ApiDataProvider'

export const ApiDataDiv = (props) => {
    const{data}= useApiDataContext();
  return (
    
    <div style={{...props.style}}>
       <h2>Data</h2> 
       {/* {JSON.stringify(data, null, 2)} */}
       //check that this is an array (data.length ) incase theres multiple objects being returned
       // data.map will return an array of elements based on an existing array. 
       {data.length >0 ? data.map(stock => {return(
        <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius: 5}}>
            <h3>{stock.symbol} - {stock.Exchange }</h3>
            <p>{stock.Name}</p>
            <p>Market cap: ${stock.MarketCapitalization.toLocaleString('us')}</p>
            <p>Dividend Date: {stock.DividendDate}</p>
        </div>
       )}): null}
     </div>
  )
}
