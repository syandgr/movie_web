import React from 'react';

export default class P_SubNavigation extends React.Component{
	render(){
		return(
			<span onClick={this.props.handleClick}>{this.props.name.name}</span>
		);
	}
}