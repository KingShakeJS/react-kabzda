import * as React from 'react';
import {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCounting = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        let tempResA = 5
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fV = Math.random()

            }

            tempResA *= i
        }

        return tempResA
    }, [a])


    for (let i = 1; i <= b; i++) {

        resB *= i
    }

    return (
        <>
            <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>

            <div>
                result for a: {resA}
            </div>

            <div>
                result for b: {resB}
            </div>


        </>
    )
}



export const HelpsToReactMemo = () => {
    console.log('Example1')


    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([
        'aaa', 'sss', 'dad', 'fff', 'ggg', 'hhh', 'jaj',
    ])
    const addUser = () => {
        setUsers([...users, 'sssa'+new Date().getTime()])
    }
const newArr=useMemo(()=>{
  return   users.filter(u => u.toLowerCase().indexOf('a') > -1)
},[users])
    return (
        <div>
            <button
                onClick={() => setCounter(counter + 1)}
            >+
            </button>
            <div>{counter}</div>
            <button
                onClick={addUser}
            >addUser
            </button>
            <UsersTable users={newArr}/>
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

