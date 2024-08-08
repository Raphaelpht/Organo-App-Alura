import './style.css'

const Button = (props) => {
    return (
        <button className='send-button'>{props.children}</button>
    )
}

export default Button;