import React from "react";

const Like = props => {
	return (
		<i
			style={{ cursor: "pointer" }}
			className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
			onClick={() => props.handleLike(props.id)}
		/>
	);
};

export default Like;
