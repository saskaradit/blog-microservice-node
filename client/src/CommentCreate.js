import React, {useState} from 'react'
import axios from 'axios'

const CommentCreate = ({postId}) => {
    const [content, setContent] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://microposts.com/posts/${postId}/comments`,{
            content
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Create a Comment</label>
                    <input type="text" value={content} onChange={e=> setContent(e.target.value)} className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate