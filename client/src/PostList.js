import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPost = async () => {
        const res = await axios.get('http://microposts.com/posts')
        // console.log(res.data)
        setPosts(res.data)
    }

    useEffect(()=> {
        fetchPost()
    },[])

    const renderPost = Object.values(posts).map(post => {
        return (
            <div className="card" style={{width: '30%', marginBottom:'1rem'}} key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <p>{post.blogContent}</p>
                    <CommentList comments={post.comments}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderPost}
    </div>
}

export default PostList