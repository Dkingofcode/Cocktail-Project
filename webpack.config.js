const path = require("path");

/* We are basically telling webpack to take index.js from entry.
Then check for all file extensions in resolve.
After that apply all the rules in module  */

module.exports={
    /**
     * 
     */

    mode: "development",
    /**
     * 
     */
    entry: "./index.js",
    output: {
    /**
         * 
         */
        path: path.resolve(__dirname, "public"),
    /**
         * 
         */
        filename: "main.js"
    },
    /**
     * 
     * 
     */
    target: "web",
    devServer: {
    /**
     * 
     */
         port: "9500",
    /**
     * 
      */
     static: ["./public"],
     /**
      * 
     */
       open: true,
     /**
      * 
      * 
      * 
       */
      hot: true,
      /**
       * 
       */
      liveReload: true       
},
   resolve: {
    /**
     * 
     * 
     * 
     */
    extensions: ['.js', '.jsx', '.json']
   },
   module:{
    /**
     * 
     * 
     * 
     * 
     * 
     */
      rule: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          }
      ]
   }
}