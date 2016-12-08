var React = require("react");

var WeatherMessage = ({temp,location})=>{
    //1ST WAY TO DECLARE THE VARS
    // var temp = props.temp;
    // var location = props.location;
    //2ND WAY TO DECLARE THE VARS
    // var {temp,location} =props;
    // 3RD WAY IS TO DESTRUCTURE PROPS RIGHT IN THE ARGUMENT (SEEN ABOVE)
    return (
            <div>
                <h3>It is {temp} in {location}</h3>
            </div>
    );   
};

module.exports = WeatherMessage;