import '../styles/Blog.css';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Post from '../components/blog/Post';
import Filterer from '../components/blog/Filterer';
import filterPosts from '../components/blog/utils/filterPosts';

const Blog = () =>{
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPost] = useState([])
    const [filterSubjects, setFilterSubjects] = useState([])
    
    // This use effect runs only once when the page is loaded
    useEffect(()=>{
        // Gets all posts from the API and sets the all posts state
        fetch('http://localhost:3030/AllPosts')
            .then(resp =>resp.json())
            .then(data=>setAllPosts(data))
    }, [])
    
    // This useEffect is run every time filterSubjects or allPosts is changed
    useEffect(()=>{
        // Call filterPosts
        var filtPosts = filterPosts(filterSubjects, allPosts)
        // Set the filteredPosts
        setFilteredPost(filtPosts)
    }, [filterSubjects, allPosts])

    // handleClick is called whenever the filter buttons are clicked
    const handleClick = (subject) =>{
        if(!filterSubjects.includes(subject)){
            setFilterSubjects(filterSubjects.concat(subject))
        }else{
            setFilterSubjects(filterSubjects.filter(e => e !== subject))
        }
    }

    return(
        <div className='Blog'>
            <div className='Header'>
                <h1 id='HeaderText'>My Blog</h1>
                <Link id='LoginLink' to='/Login'>Login</Link>
                <Link id='SignUpLink' to='/SignUp'>Sign Up</Link>
            </div>
            <Filterer handleClick={handleClick} allPosts={allPosts}/>
            <div className='Posts'>
                {filteredPosts.map(post=><Post key={post.id} title={post.title} tags={post.subjects} body={post.body} />)}
            </div>
        </div>
    )
}

export default Blog;