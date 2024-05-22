import { useEffect, useState } from "react"

export const LookbookPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [seconds, setSeconds] = useState(0)

    useEffect((el) => {
        const startInterval = setInterval(() => {
            setSeconds((el) => el + 1)
        }, 1000)

        return() => {
            clearInterval(startInterval)
        }
    }, [])

    const handleClick = () => {
        console.log({
            name,
            email,
            password
        })
    }

    return (
        <>
        <input 
            type="text" 
            placeholder="Введите имя" 
            onInput={(e) => setName(e.target.value)} />
        <br />
        <input 
            type="email" 
            placeholder="Введите email" 
            onInput={(e) => setEmail(e.target.value)} />
        <br />
        <input 
            type="password" 
            placeholder="Введите пароль" 
            onInput={(e) => setPassword(e.target.value)} />
        <br />
        <button 
            onClick={ handleClick } 
            style={{ width: '165px' }}>
                Зарегистрироваться
        </button>
        <h4 style={{ fontSize: '26px' }}>Сколько секунд открыт компонент:</h4>
        <p style={{ fontSize: '46px'}}>{ seconds }</p>
        </>
    )
}