import React from 'react'
import {Link,IndexLink} from 'react-router'

class App extends React.Component{
	render(){
		return (<div>
					<p>我是外面的盒子</p>
					{this.props.children}
					<IndexLink to="/" className="btn" activeStyle={{background:'orange',color:'#fff'}}>Welcome</IndexLink>
					<Link to="/comment" className="btn" activeStyle={{background:'orange',color:'#fff'}}>Comment</Link>
					<Link to={{pathname:'/home',query:{name:'aa'}}} className="btn" activeStyle={{background:'orange',color:'#fff'}}>Home</Link>
					<Link to="/user/Jerry" className="btn" activeStyle={{background:'orange',color:'#fff'}}>User</Link>
				</div>)
	}
}

module.exports=App