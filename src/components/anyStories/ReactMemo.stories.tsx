import * as React from 'react';
import {useState} from "react";

export default {
    title: 'React.memo demo'
}


export const Example1 = () => {
    console.log('Example1')


    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([
        'aaa', 'sss', 'ddd', 'fff', 'ggg', 'hhh', 'jjj',
    ])

    const addUser = () => {
      setUsers([...users, 'sss'+new Date().getTime()])
    }

    return (
        <div>
            <button
                onClick={() => setCounter(counter + 1)}
            >+
            </button>
            <button
                onClick={addUser}
            >addUser
            </button>
            <NewMsgCounter count={counter}/>
            <UsersTable users={users}/>
        </div>
    )
}


const NewMsgCounter = (props: { count: number }) => {
    console.log('NewMsgCounter')

    return (
        <div>
            {props.count}
        </div>
    )
}

const SecretUsersTable = (props: { users: string[] }) => {
    console.log('UsersTable')
    return (
        <div>
            {props.users.map((u, i) => (
                <div key={i}>{u}</div>
            ))}
        </div>
    )
}
const UsersTable = React.memo(SecretUsersTable)