var   express = require("express");
var   app     = express();
const Port    = (process.env.PORT || 3000);


//another thing
app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto']==='http'){
        next();
    }else {
        res.redirect("http://"+req.hostname+req.url);
    }
});
app.use(express.static(__dirname + "/public"));
// app.get("/", function(req,res){
//     res.render("index");
// });


app.listen(Port, process.env.IP, function(){
   console.log("Bring me to your leader ");
});
console.log('using the updated server');