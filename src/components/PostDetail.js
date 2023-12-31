import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const [post, setPost] = useState({});
    const { postId } = useParams()
    useEffect(() => {
        firestore
            .collection('post')
            .doc(postId)
            .get()
            .then((snapshot) => {
                console.log('snapshot', snapshot.data());
                setPost(snapshot.data());
            })
    }, [postId])
    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
