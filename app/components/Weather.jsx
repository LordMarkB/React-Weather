var React          = require("react");
var WeatherForm    = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");


var Weather = React.createClass({
    getInitialState: function(){
      return{
          isLoading:false
      };  
    },
    handleSearch: function(location){
        //create a variable that will allow us to call this after we make a new function bc it gets lost
        var that = this;
        
        
        //this keyword will automatically pause the state in this moment in time when developer tools open;
        //debugger;
        
        //set state to  loading for the animation
        that.setState({
            isLoading : true,
        });
        
        openWeatherMap.getTemp(location).then(function (temp){
            //used that bc when in a new function, it gets lost, so used var for this from before. 
            that.setState({
                location:location,
                temp:temp,
                isLoading:false
            });
        }, function (errorMessage){
            that.setState({isLoading:false});
            alert(errorMessage);
        })
    },
    render: function (){
        var {isLoading,temp,location} = this.state;
        
        //made its own function, can be added as a function in the return statement
        function renderMessage (){
            if(isLoading){
                return <h3>Loading Weather...</h3>;
            }else if (temp && location){
                return <WeatherMessage location={location} temp = {temp} />
            }
        }
        return (
                
                <div>
                    <h3 className="text-center">Get Weather</h3>
                    <WeatherForm onSearch = {this.handleSearch}/>
                    {renderMessage()}
                </div>
            )
    }
})

module.exports = Weather;