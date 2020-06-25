import React ,{useEffect, useState} from 'react';
import '../styles/Jumbotron.css'

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
