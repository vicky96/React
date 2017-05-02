import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import CommentBox from './src/CommentBox'
import Home from './src/Home'
import App from './src/App'
import Welcome from './src/Welcome'
import User from './src/User'

var oApp = document.getElementById("app")

const canEnter = function({location},replace,next){//如果只执行next,就加上第三个参数，如果存在判定去哪个replace,就写只前两参数

	// console.log({location})
	if(location.query.name){
		// console.log(2)
		// replace('/home')
		setTimeout(()=>{
			next()
		},1000)
	}
}

ReactDOM.render(
				(<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Welcome}/>
						<Route path="/comment" component={CommentBox}/>
						<Route path="/home" component={Home} onEnter={canEnter}/>
						<Route path="/user/:username" component={User}/>
					</Route>
				</Router>),
				oApp)