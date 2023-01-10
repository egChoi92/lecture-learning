import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';


const Home = () => {
    const { user, isLoggedIn } = useSelector(state => state.user);
    const { mainPost } = useSelector(state => state.post);
    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPost.map((post, index) => {
                return (
                    <PostCard key={index} post={post} />
                )
            })}
        </div>
    )
}

export default Home;