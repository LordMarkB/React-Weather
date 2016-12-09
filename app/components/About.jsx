var React = require("react");

//only takes in props it is given
var About = (props)=>{
    return (
        <div>
            <h1 className="text-ceneter">About</h1>
            <p>This is the first deployed application for Mark Brazinski. This app uses the <a href="https://openweathermap.org/">OpenWeatherMap</a>, using the API we create a get request for the city name and return it to the user</p>
            <p>The app was written using full stack JavaScript, including <a href="https://nodejs.org/en/">node.js</a>, <a href="https://expressjs.com/">express.js</a> and <a href="https://facebook.github.io/react/">react.js</a>. This app should be responsive</p>
            <p>For more projects by the developer please see the <a href="https://github.com/LordMarkB">github repo</a></p>            
        </div>
    );
    
};


module.exports = About;