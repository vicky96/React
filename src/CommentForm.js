import React from 'react'
class CommentForm extends React.Component{
	constructor(){
		super()
		this.state={
			title:'',
			content:''
		}
		this.subClick = this.subClick.bind(this)
		this.titleChange = this.titleChange.bind(this)
		this.contentChange = this.contentChange.bind(this)
	}
	titleChange(event){
		this.setState({
			title:event.target.value
		})
	}
	contentChange(event){
		this.setState({
			content:event.target.value
		})
	}
	render(){
		return (<div>
					<input type="text" placeholder="标题" ref="title"/>
					<input type="text" placeholder="内容" ref="content"/>
					<input type="submit" onClick={this.subClick}/>
				</div>)
		// return (<div>
		// 			<input type="text" placeholder="标题" value={this.state.title} onChange={this.titleChange}/>
		// 			<input type="text" placeholder="内容" value={this.state.content} onChange={this.contentChange}/>
		// 			<input type="submit" onClick={this.subClick}/>
		// 		</div>)
	}
	subClick(){
		var iTitle = this.refs.title.value,
			iContent = this.refs.content.value;
		if(!iTitle&&!iContent){
			alert("不能为空")
		}else{
			this.setState({
				title:iTitle,
				content:iContent
			},() => this.props.onSubData(this.state))//this.setState是异步的，所以你一呼叫this.setState完，马上作获取this.state中的值，不一定能获取得到改变的值，两种解决方式：1.箭头函数回调 2.用componentDidUpdate()这个生命周期方法，把确定更新后要作的代码放里面
			console.log(this.state)
			console.log(iTitle)
			
		}
		// if(!this.state.title || !this.state.content){
		// 	alert("不能为空")
		// }else{
		// 	this.props.onSubData(this.state)
		// 	this.state={
		// 		title:'',
		// 		content:''
		// 	}
		// }
	}
}
module.exports=CommentForm