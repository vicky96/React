import React from 'react'
class Comment extends React.Component{
	constructor(){
		super()
		this.Del=this.Del.bind(this);
	}
	Del(){
		this.props.delKey2(this.props.key1);
	}
	render(){
		var key1=this.props.key1;
		return (<li>
					<h3>标题：{this.props.title}</h3>
					<p>内容：{this.props.content}</p>
					<button onClick={this.Del} >删除</button>
					
				</li>
				)
	}
}
module.exports=Comment