import React ,{useEffect, useState} from 'react';
import '../styles/SectionBox.css'

export default function SectionBox(props) {
	const [title] = useState('');
	const [content] = useState('');

	return (
		<section class="box">
			<div class="row intro">
				<div class="medium-12 columns">
					<h1>{props.title}</h1>
					<p>{props.content}</p>
				</div>
			</div>
		</section>
	);
  }
