import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { COMMENT_API } from './API';

const CommentList = ({ postId }) => {
	const [ comments, setComments ] = useState([]);
	const fetchData = async () => {
		const res = await axios.get(COMMENT_API + postId + '/comments');

		setComments(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderedComments = comments.map((comment) => {
		return <li key={postId}>{comment.content}</li>;
	});

	return <ul>{renderedComments}</ul>;
};

export default CommentList;
