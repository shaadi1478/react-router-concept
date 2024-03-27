import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const{id,name, phone, email, website, company, address} = user;

    const userStyle = {
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div > 
            <h1>About Users Details:</h1>
            <div  style={userStyle}>
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website; {website}</p>
            <p>Company: {company.name}</p>
            <p>City : {address.city}</p>
            </div>
        </div>
    );
};

export default UserDetails;