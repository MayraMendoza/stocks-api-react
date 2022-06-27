import React from 'react'

export const StockOverview = (props) => {
    const{data: stock} = props
  return (
    <div key={stock.id} style={{border: "1px solid grey", marginTop: 10, borderRadius: 5}}>
        <h3>{stock.symbol} - {stock.Exchange }</h3>
        <p>{stock.Name}</p>
        <p>Market cap: ${stock.MarketCapitalization.toLocaleString('us')}</p>
        <p>Dividend Date: {stock.DividendDate}</p>
    </div>
  )
}
