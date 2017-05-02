import React from 'react'

class Welcome extends React.Component{
	constructor(props,context){
		super(props,context)
		this.goHome = this.goHome.bind(this)
		this.context.router;
	}
	goHome(){
		var path = '/home';
		// this.context.router.push(path)
		this.context.router.push({pathname:path,query:{name:'aa'}})
	}
	render(){
		return (<p>
					欢迎您！
					<button onClick={this.goHome}>进入home</button>
				</p>)
	}
}

Welcome.contextTypes = {
	router:React.PropTypes.object
}

module.exports=Welcome