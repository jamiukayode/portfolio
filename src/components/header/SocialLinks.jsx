import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialLinks = () => {
    return (
        <div className='header_social' data-aos="fade-up-right">
            <a href="https://www.linkedin.com/in/ibrahim-jamiu-kayode-543509252" target='_blank'> <FaLinkedin /> </a>
            <a href="https://github.com/jamiukayode/" target='_blank'> < FaGithub /> </a>
            <a href="https://x.com/Ibrahim_webdev/" target='_blank'> < FaSquareXTwitter /> </a>

        </div>
    )
}

export default SocialLinks