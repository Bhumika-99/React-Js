import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

let curTime = new Date();
curTime = curTime.getHours();

let greet = "";

const cssStyle = { };

if(curTime >=1 && curTime < 12){
    greet = 'Good Morning';
    cssStyle.color = "Green";
}
else if(curTime>=12 && curTime <19){
    greet = 'Good Afternoon';
    cssStyle.color = "Orange";
}
else {
    greet = "Good night";
    cssStyle.color = "Blue";
}


ReactDOM.render(
    
    <div>
        <h1>
            Hello,
            <span style={cssStyle}> {greet} </span>
        </h1>
    </div>,

    

    
    
    
    
    
    
    
    document.getElementById('root')
    
);