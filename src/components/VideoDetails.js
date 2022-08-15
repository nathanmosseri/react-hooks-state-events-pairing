import React, { useState } from "react";

const VideoDisplay = ({title, views, created, upVotes, downVotes}) => {

    const [upVotesCounter, setUpVotesCounter] = useState(upVotes)
    const [downVotesCounter, setDownVotesCounter] = useState(downVotes)

    const handleUpClick = () => {
    setUpVotesCounter((upVotesCounter) => upVotesCounter + 1)
    }

    const handleDownClick = () => {
        setDownVotesCounter((downVotesCounter) => downVotesCounter + 1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} | {created}</p>
            <button onClick={handleUpClick}>👍{upVotesCounter}</button> <button onClick={handleDownClick}>👎{downVotesCounter}</button>
            
        </div>
    )
}

export default VideoDisplay