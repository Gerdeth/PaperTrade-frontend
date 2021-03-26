import React,{useEffect, useState} from "react";
import MoversStore from "../stores/Store";
import ActionTypes from "../actions/actionTypes";


function BrowseData(){
    const [topMovers, settopMovers]= useState(MoversStore.getTopMovers)
    return(
        <div>
            <div className="BrowseTitle"><h1>Top Movers</h1></div>
            <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h2 className="card-text">Symbol</h2>
            <p className= "card-text"> change_percentage</p>
            
            </div>
        </div>
        
    )
}

// function Favorites({price,change_point, change_percentage}){
    
//     const [stocksData, setstocksData]= useState({});
//     const [searchTerm,setsearchTerm] = useState(" ")
        

//         useEffect(()=>{
//             getStocks()
//         },[]);

    
//         const getStocks=(FAVORITES)=>{
//             fetch("https://realstonks.p.rapidapi.com/TSLA", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "607c356a15msh664378701f6febfp170069jsn3c9f418ebaf0",
//                 "x-rapidapi-host": "realstonks.p.rapidapi.com"
//             }
//         })
//         .then((res)=>res.json())
//         .then((data) => {
//             console.log(data);
//             setstocksData(JSON.parse(data));
          
            
//         })
//         .catch(err => {
//             console.error(err);

//         });
//     }
//   if (!stocksData) return null     

        
//     return(
//         <div>
            
            
//             {Object.keys(stocksData).length > 0 && (
//                 <FavoritesData
//                 {...stocksData}
//                 />
//             )
//             }
//         </div>

            
    
        
        
//     )
       
// };

   


export default BrowseData;
