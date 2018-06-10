import React, { Component } from 'react';
import Main from './P_Main';
import BoxOffice from './L_BoxOffice';
import P_SubNavigation from './P_SubNavigation';

class P_Navigation extends Component {
	constructor(props){
		super(props);
		
		/*
			selected_key : 어떤 Navigation을 선택했는지? ex) Main : 0, BoxOffice : 1
			navigation_list : Navigation 대한 정보 전달 (todo)
		*/
		this.state={
			selected_key:0,
			navigation_list:[
				{name:"Main"},
				{name:"BoxOffice"}
			]
			
		}
	}
	
	/*
		P_SubNavigation에서 클릭된 Navigation index를 state.selected_key에 setState 
	*/
	_setNavigation(key) {
		console.log(this.state.navigation_list[key].name,'이 클릭되었습니다.');
		this.setState({
			selected_key:key
		})
	}
	
  render() {
	  /*
		선택된 컴포넌트를 저장하는 변수
	  */
	  var nav;
	  
	  switch(this.state.selected_key)
	  {
		  case 0:
		  {
			nav=<Main/>
			console.log('Main 컴포넌트가 저장되었습니다.')
			break;
		  }
		  case 1:
		  {
			  nav=<BoxOffice/>
			  console.log('BoxOffice 컴포넌트가 저장되었습니다.')
			  break;
		  }
	  }
	  
	  
	  const _mapToData = (data) => {
			return data.map((contact, i) => {
                return (
					<P_SubNavigation 
						name={contact} 
						key={i} 
						handleClick={ () => this._setNavigation(i) } 
					/>
				);
            });
        };
		
    return (
		<div>
			<div>{_mapToData(this.state.navigation_list)}</div>
			{nav}
		</div>
    );
  }
}

export default P_Navigation;
