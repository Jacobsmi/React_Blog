const Post = (props) =>{
    return(
        <div className='Post'>
            <div className='PostHeader'>{props.title}</div>
            <div className='PostTags'>{props.tags}</div>
            <div className='PostBody'>{props.body}</div>
            <button>Comment</button>
        </div>
    )
}

export default Post;