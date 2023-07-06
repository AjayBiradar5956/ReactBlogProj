import { firestore } from "../firebase";
import { useFormInput } from '../hooks';

function CreatePost() {
    const title = useFormInput('');
    const content = useFormInput('');
    const subtitle = useFormInput('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('title', title.value);
        console.log('subtitle', subtitle.value);
        console.log('content', content.value);

        firestore.collection('post').add({
            title: title.value,
            content: content.value,
            subtitle: subtitle.value,
            createdAt: new Date(),
        });


    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title} />
                </div>
                <div className="form-field">
                    <label>Sub-Title</label>
                    <input {...subtitle} />
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content} ></textarea>
                </div>
                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
