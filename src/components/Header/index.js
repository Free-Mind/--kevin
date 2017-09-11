import React,{Component} from "react";
import "./index.css";

export default class Header extends Component{
	render(){
		return(
			<div className="component-header">
                <img src="/static/images/logo.png" width="40" alt="" className="-clo-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
		)
}