import React from "react";

function Home(){
    
    return(

        <div className="about">
            <p className="aboutText">
                stocks-O is a trading simulator using real time market data and virtual cash. Users
                can test their trading strategies without risking their money. The simulator performs
                like a real brokerage account. Get started for free!
            </p>
            
            <div className="get-started-btn">
                <button className="getStarted ">  <a  href="/signup">Get Started</a></button>
            </div>
           
        </div>

    )
       

}
export default Home;