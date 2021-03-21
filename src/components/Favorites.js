import React,{useEffect, useState} from "react";


function FavoritesData({price,change_point,change_percentage,...rest}){
    return(
        <div>
            <div>Price:{price}</div>
            <div>Profit/loss:{change_point}</div>
            <div>Percent Change:{change_percentage}</div>
        </div>
        
    )
}

function Favorites({price,change_point, change_percentage}){
    
    const [stocksData, setstocksData]= useState({});
    // const [searchTerm,setsearchTerm] = 
        

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
            {/* <header>
                <form onSubmit={handleOnSubmit}>
                    <input 
                    type="search" 
                    className="search" 
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleOnChange}
                    />
                </form>
             </header> */}
            
            {Object.keys(stocksData).length > 0 && (
                <FavoritesData
                {...stocksData}
                />
            )
            }
        </div>

            
    
        
        
    )
       
};

   


export default Favorites;
