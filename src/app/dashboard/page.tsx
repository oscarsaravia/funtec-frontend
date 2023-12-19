'use client'

export default function DashBoard() {

    const handleClick = () => {
        console.log('Click!')
    }

    return (
        <>
            <h1>Hello, Next.js!</h1>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}
