var path = require('path');

module.exports = {
   entry:'./index.js',
   output:{
   	 path: path.resolve(__dirname, 'build'),
   	 filename:'bundle.js'
   },
   module:{
   	 rules:[{
   	 	test:/\.js|jsx$/,
   	 	exclude:/node_modules/,//除了哪个文件
   	 	use:'babel-loader'
   	 },
   	 {
   	 	test:/\.css/,
   	 	use:[{
   	 		loader:'style-loader'
   	 	},{
   	 		loader:'css-loader'
   	 	}]
   	 }]
   },
   resolve:{
        extensions: ['.js', '.json'] 
   },
   devtool:'source-map',
   devServer:{
   	 port:'8090',
   	 hot:true,
   	 contentBase:'./'
   }

}