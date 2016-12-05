var React          = require("react");
var WeatherForm    = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    getInitialState: function(){
      return{
          location: "Miami",
          temp: 88
      };  
    },
    handleSearch: function(location){
        //create a variable that will allow us to call this after we make a new function bc it gets lost
        var that = this;
        openWeatherMap.getTemp(location).then(function (temp){
            //used that bc when in a new function, it gets lost, so used var for this from before. 
            that.setState({
                location:location,
                temp:temp
            });
        }, function (erroMessage){
            alert(erroMessage);
        })
        
        
        
    //   this.setState({
    //       location: location,
    //       temp: 23
    //   }); 
    },
    render: function (){
        var {temp,location} = this.state;
        return (
                
                <div>
                    <h3>Weather Component</h3>
                    <WeatherForm onSearch = {this.handleSearch}/>
                    <WeatherMessage location={location} temp = {temp} />
                </div>
            )
    }
})

module.exports = Weather;