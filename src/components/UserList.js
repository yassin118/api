import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UsersCard from './UsersCard';

const UserList = (props) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUser(res.data)
        }).catch((error) => console.log(ilyaunerreur))
    }, []);

    let Filter = user.filter((person, key) => (
        person.name.toLowerCase().includes(props.search.toLowerCase())
    ));

    return (
        <div>
            {Filter.map((users) => (
                <UsersCard users={users} key={users.id} />
            ))}
        </div>
    )
}

export default UserList