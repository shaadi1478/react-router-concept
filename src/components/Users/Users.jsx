import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'

const Users = () => {

    const users = useLoaderData()
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in, quo eaque ea laboriosam consectetur voluptatibus dolorem nesciunt? Sit magni repellat exercitationem nam officia, fugiat a! Molestiae consectetur adipisci odit.</p>

            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;