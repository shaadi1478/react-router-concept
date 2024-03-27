import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();
    const {postId} = useParams();
    console.log(postId)
    const handleGoBack = () => {
        navigate(-1)
    }

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div className="posts">
            <h2>This is Post Details</h2>
            <div style={userStyle}>
            <h3>ID : {id}</h3>
            <h3>Post Title : {title}</h3>
            <p>Post Description : {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;