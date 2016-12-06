var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=a8069916b7735d79786dd993474ca0fd&units=imperial";
// API KEY --> a8069916b7735d79786dd993474ca0fd


module.exports = {
    getTemp:function (location){
        //EncodedURIComponent is how to ensure that info being passed into later URI will be converted into 
        // the right format for URI to accept ie a space turns into %20
        
        var endodedLocation = encodeURIComponent(location);
        
        //below is new feature called template strings, use backtick (next to 1 on keybord) to do a template string
        // the ${} let you inject js into a url string
        //here we are taking the contstant url and injecting into the var, later we will add on the q= whatever
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${endodedLocation}`;
        
        //axios.get makes the get request for you requires a promise
        //first function is a resoponse, the second is an error
        //need to return it as well
        
        return axios.get(requestURL).then(function(res){

            //sucsess path
            //if statement will catch all other issues in the response if any 
            if(res.data.cod && res.data.message){
                console.log("Success Path Error");
                
               throw new Error(res.data.message); 
            } else {
                return res.data.main.temp;
            }
        },function (res){
            //failure path
            //open weathermap api is not super RESTFUL so we need to do that anyway. 
            console.log("failure path");
            throw new Error(res.data);
        });

    }
};