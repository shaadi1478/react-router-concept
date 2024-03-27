import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const User = ({user}) => {
    const{id, name, phone, email} = user;

    const userStyle = {
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            <h1>ID: {id}</h1>
            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Shows Detlails</Link>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object.isRequired
}



export default User;