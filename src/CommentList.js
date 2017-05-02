import React from 'react'
import Comment from './Comment'
class CommentList extends React.Component{
	constructor(){
		super()
		this.delKey=this.delKey.bind(this);
	}
	delKey(num){
		this.props.delData(num);
	}
	render(){
		var list = this.props.list
		var newList = "说点什么吧"
		if(list.length){
			newList = list.map(function(item,index){
						return (<Comment title={item.title} content={item.content} key1={index} key={index} delKey2={this.delKey}/>)
					},this)
		} 
		return (<ul>
					{newList}
				</ul>)
	}
}
module.exports=CommentList