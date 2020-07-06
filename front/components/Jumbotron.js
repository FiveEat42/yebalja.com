import React ,{useEffect, useState} from 'react';
import './Jumbotron.module.css'

export default function Jumbotron(props) {
	const [title] = useState('');
  	const [content] = useState('');

	return (
			<div class="jumbotron jumbotron-fluid">
  				<div className="container">
    				<h1>{props.title}</h1>
    				<p>{props.content}</p>
  				</div>
			</div>
	);
  }
