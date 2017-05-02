import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
class CommentBox extends React.Component{
	constructor(){
		super()
		this.state={
			list:[],
			key:"Comment"
		}
		this.setData = this.setData.bind(this)
		this.getList = this.getList.bind(this)
		this.delData = this.delData.bind(this)
	}
	componentWillMount(){
		this.getList()
	}
	delData(num){
		var li = this.state.list;
		li.splice(num,1)
		this.setState({
			list:li
		})
		localStorage.setItem(this.state.key,JSON.stringify({data:li}))
	}
	render(){
		return (<div>
					<CommentList list={this.state.list} delData={this.delData}/>
					<CommentForm onSubData={this.setData}/>
				</div>)
	}	
	setData(obj){
		var list = this.state.list,
			iList = list.concat([obj])
		this.setState({
			list:iList
		}) 
		localStorage.setItem(this.state.key,JSON.stringify({data:iList}))
	}
	getList(){
		var list = JSON.parse(localStorage.getItem(this.state.key))
		if(list){
			this.setState({
				list:list.data
			})
		}
	}
}
module.exports = CommentBox