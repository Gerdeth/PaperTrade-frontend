import React,{useEffect, useState} from "react";


function BrowseData({companyName,change_point,change_percentage,...rest}){
    return(
        <div>
            <div className="BrowseTitle">Top Movers</div>
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
