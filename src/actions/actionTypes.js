import dispatcher from "../appDispatcher";



function ActionTypes(){
    dispatcher.dispatch({
        createUser:(username,email, password)=>{

        },
        updatePortfolio:()=>{

        },
        buyStock:(userId, symbol, companyName, price, quantity, totalReturn)=>{ 

        },

        loadTopMovers:()=>{
            const store = getStore();
            fetch("https://financialmodelingprep.com/api/v3/actives?apikey=f19b2da4e27cfbbaeaa219bc4d346fd5")
                .then(res=>res.json())
                .then(data=>setStore({...store}))
                .catch(err=> console.log(err.message));
            console.log("Top movers loaded")        
               
        }
    });

}


export default ActionTypes;