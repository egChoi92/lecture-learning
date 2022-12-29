import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
    isLoggedIn: true,
    imagePath: [],
    mainPost: [{
        createdAt: '',
        img: 'https://web-resource.gentlemonster.com/assets/stories/bold_collection/img/common/open_graph.jpg',
        content: '첫 번째 게시글',
        User: {
            id: 1,
            name: 'ChoiEG',
        }
    }]
}

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <PostForm imagePath={dummy.imagePath} />}
            {dummy.mainPost.map((post) => {
                return (
                    <PostCard key={+post.createdAt} post={post} />
                )
            })}
        </div>
    )
}

export default Home;