import React, { useState } from "react";
import CommentVotes from './CommentVotes'

const Comments = ({comments}) => {  
    
    const [commentText, setCommentText] = useState('')
    const [commentButton, setCommentButton] = useState (true)
    const [commentUpVote, setCommentUpVote] = useState(0)
    const [commentDownVote, setCommentDownVote] = useState(0)
    const [commentSearch, setCommentSearch] = useState('')
    
    //counts up comment upvotes
    const handleCommentUpvote = () => {
        setCommentUpVote(commentUpVote => commentUpVote + 1)
    }

    //counts up comment downvotes
    const handleCommentDownVote = () => {
        setCommentDownVote(commentDownVote => commentDownVote + 1)
    }

    // set state of hid comments button
    const handleCommentHide = () => {
        setCommentButton(commentButton => !commentButton)
    }

    const handleSearch = (e) => {
        setCommentSearch(e.target.value)
    }

    const commentContent = (comments.map((comment, i) => {
        if (commentButton === true) {
            return (
                <>
                <h3 key={comment.user}>{comment.user}</h3>
                <p key={comment.id}>{comment.comment}</p> 
                <button onClick={handleCommentUpvote} key={i}>👍{commentUpVote}</button> <button onClick={handleCommentDownVote} key={i+2}>👎{commentDownVote}</button>
                </>
                )
        }  else {
            return null
        }
                
        
        }))
            
    return (
        <div className="commentSection">
            <h2>{comments.length} Comments</h2>
            <label>Search Comments</label>
            <input onChange={handleSearch} ></input>
            <button onClick={handleCommentHide}>{commentButton? 'Hide Comments' : 'Show Comments'}</button>
            {commentContent}
        </div>
    )

}

export default Comments