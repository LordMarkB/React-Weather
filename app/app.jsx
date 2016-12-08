var React          = require("react"),
    ReactDOM       = require("react-dom"),
    Weather        = require("Weather"),
    Main           = require("Main"),
    About          = require("About"),
    Examples       = require("Examples"),
    {Route, Router, IndexRoute, hashHistory} = require("react-router");

//load foundation 
//jsx doesnt know how to use css so add loader css!
//need to put into all pages, so chain the loaders with style!
require("style!css!foundation-sites/dist/foundation.min.css");

//grabs whole document and applies foundation
$(document).foundation();



ReactDOM.render(
    <Router history ={hashHistory}>
        <Route path="/" component= {Main}>
            <Route path="about" component= {About}/>
            <Route path = "examples" component= {Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
    );
