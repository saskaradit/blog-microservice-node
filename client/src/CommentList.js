import React from 'react'

const CommentList = ({comments}) => {

    const renderComment = comments.map(comment => {
        let content
        if (comment.status === 'approved'){
            content = comment.content
        }else if(comment.status === 'pending'){
            content = "This comment is awaiting moderation"
        }
        else if(comment.status === 'rejected'){
            content = "This comment is rejected"
        }

        return <li key={comment.id}>{content}</li>
    })

    return (
        <div>
            <ul>
                {renderComment}
            </ul>
        </div>
    )
}

export default CommentList