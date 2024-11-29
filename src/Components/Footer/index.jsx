import './style.css'

const Footer = (props) => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel='noreferrer'>
                            <img src='/images/fb.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel='noreferrer'>
                            <img src='/images/tw.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel='noreferrer'>
                            <img src='/images/ig.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>{props.children}</p>
            </section>
        </footer>
    )
}

export default Footer;