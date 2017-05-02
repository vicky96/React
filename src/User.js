import React from 'react'

class User extends React.Component{
	render(){
		return (<p>
					用户：{this.props.params.username}
				</p>)
	}
}

module.exports=User