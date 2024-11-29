import * as S from './styled'

const Footer = (props) => {
    return (
        <S.FooterContainer>
            <S.SectionContainer>
                <S.FooterList>
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
                </S.FooterList>
            </S.SectionContainer>
            <S.SectionContainer>
                <img src="/images/logo.png" alt="" />
            </S.SectionContainer>
            <S.SectionContainer>
                <S.FooterTitle>{props.children}</S.FooterTitle>
            </S.SectionContainer>
        </S.FooterContainer>
    )
}

export default Footer;