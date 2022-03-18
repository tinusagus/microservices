import React, { useState } from 'react';
import axios from 'axios';
import { COMMENT_API } from './API';

const CommentCreate = ({ postId }) => {
	const [ content, setContent ] = useState('');

	const onClick = () => {
		console.log(postId);
		console.log(COMMENT_API + postId + '/comments');
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		await axios.post(COMMENT_API + postId + '/comments', {
			content
		});
		setContent('');
	};

	return (
		<div>
			<button onClick={onClick} className="btn btn-primary">
				TEST
			</button>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
