import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import React from 'react'

import BurgerLogo from '../../assets/burger-logo.svg'
import { FooterContainer, ImageLogo, P, Socials, Copy } from './styles'

export function FooterComponent() {
    return (
        <FooterContainer>
            <ImageLogo src={BurgerLogo} alt="Logo-CodeBurger" />
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                orci purus, vestibulum
                <br /> molestie quam ut, quam venenatis semper. Suspendisse
                potenti.
            </P>
            <Socials>
                <FacebookIcon className="icon" />
                <InstagramIcon className="icon" />
                <WhatsAppIcon className="icon" />
            </Socials>
            <hr />
            <Copy>&copy; 2022 CodeBurger</Copy>
        </FooterContainer>
    )
}
