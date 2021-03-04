import React, {useState}  from 'react'
import axios from 'axios'

const PostCreate = () => {
    const [title,setTitle] = useState('')
    const [blogContent, setblogContent] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://microposts.com/posts/create', {
            title,blogContent
        })
        console.log(title,blogContent)
        setTitle('')
        setblogContent('')
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-2">
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control"/>
                    <label>Content</label>
                    <input value={blogContent} onChange={e => setblogContent(e.target.value)}type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate