import React, {useEffect, useState} from "react";

function MyPortfolioData({price,change_point,change_percentage,...rest}){
    return(
        <div className="my_portfolio">
            <div className= "portfolio_header">
                <ul>
                <li>
                    Portfolio Value:$10000.00
                </li>
                <li>
                    
                    Net P&L : $-30.25
                </li>
                <li>
                    Cash Balance :$50.00
                </li>
                </ul>
            </div>
            <div>
                <button className="quickTrade"> Quick Trade</button>
                <button className="performance"> Performance</button>
            </div>
            <div>
                <h1>My Positions</h1>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Quantity</th>
      <th scope="col">Market Value</th>
      <th scope="col">Last/Average Price</th>
      <th scope="col">Profit/Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >
          <li className="portfolioList">TSLA</li>
          <li className="portfolioList">TESLA</li>
      </td>
      <td>100</td>
      <td>{(price)*100}</td>
      <td>
          <li className="portfolioList">{price}</li>
          <li className="portfolioList">{price-change_point}</li>
      </td>
      <td> 
          <li className="portfolioList">{change_point*100}</li>
         <li className="portfolioList">{change_percentage}%</li> 
          </td>
    </tr>
   
  </tbody>
</table>

            </div>

        </div>
    )
}
function MyPortfolio({price,change_point, change_percentage}){
    
    const [stocksData, setstocksData]= useState({});
    const [searchTerm,setsearchTerm] = useState(" ")
        

        useEffect(()=>{
            getStocks()
        },[]);

    
        const getStocks=(FAVORITES)=>{
            fetch("https://realstonks.p.rapidapi.com/TSLA", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "607c356a15msh664378701f6febfp170069jsn3c9f418ebaf0",
                "x-rapidapi-host": "realstonks.p.rapidapi.com"
            }
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data);
            setstocksData(JSON.parse(data));
          
            
        })
        .catch(err => {
            console.error(err);

        });
    }
  if (!stocksData) return null     

        
  return(
    <div>
        
        
        {Object.keys(stocksData).length > 0 && (
            <MyPortfolioData
            {...stocksData}
            />
        )
        }
    </div>

        

    
    
) 

            
    
        

    
       
};

   

export default MyPortfolio;