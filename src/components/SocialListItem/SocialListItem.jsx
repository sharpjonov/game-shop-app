import React from 'react'

const SocialListItem = ({item}) => {
  return (
    <li>
        <a href="/">
            <i className={`bi ${item.icon}`}></i>
        </a>
    </li>
)
}

export default SocialListItem