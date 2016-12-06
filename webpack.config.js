module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    }, 
    resolve: {
        root: __dirname,
        alias: {
            //add alias: filepath for each file to alias
            Main: "app/components/Main.jsx",
            Nav : "app/components/Nav.jsx", 
            Weather: "app/components/Weather.jsx",
            About: "app/components/About.jsx",
            Examples: "app/components/Examples.jsx",
            WeatherForm: "app/components/WeatherForms.jsx",
            WeatherMessage: "app/components/WeatherMessage.jsx",
            openWeatherMap: "app/api/openWeatherMap.jsx"

        },
        extenstions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', //same name as json file
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
            ]
    },
        devtool: '#eval-source-map' //let us create source maps
};