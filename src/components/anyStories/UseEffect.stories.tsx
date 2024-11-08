import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect срабатывает при первой отрисовке и всех остальных')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect срабатывает только при первой отрисовке ')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect срабатывает при первой отрисовке и при изменении зависимостей')
        document.title = counter.toString()
    }, [counter])


    return (
        <div>
            <h1>Hello, {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setFake(fake + 1)
            }}>fake {fake}
            </button>
        </div>
    );
};
export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1500)
    }, [counter])



    return (
        <div>
            <h1>Hello, {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setFake(fake + 1)
            }}>fake {fake}
            </button>
        </div>
    );
};
export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            console.log('tick: ', counter )
            setCounter((state)=>state + 1)

        }, 1000)
    }, [])


    return (
        <div>
            <p>{counter}</p>
        </div>
    );
};

