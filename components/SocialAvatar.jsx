import React from "react"
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const SocialAvatar = ({ className, href, name }) => {
  const ICONS = {
    twitter: <FaTwitter fill="gray" />,
    facebook: <FaFacebookF fill="gray" />,
    github: <FaGithub fill="gray" />,
    linkedin: <FaLinkedinIn fill="gray" />,
    instagram: <FaInstagram fill="gray" />,
  }

  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      <div className={className}>
        {ICONS[name]}
      </div>
    </a>
  )
}

export default SocialAvatar
