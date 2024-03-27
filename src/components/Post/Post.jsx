import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h2>ID {id}</h2>
            <h3>Post Title : {title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Clcik to see Details</button>
        </div>
    );
};

export default Post;