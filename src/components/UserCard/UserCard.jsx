import React from 'react'

import userCountry from "../../assets/images/country/flags.jpg"


const UserCard = ({userImage,userName,userComment}) => {
  return (
    <div className='slider'>
      <div className="slider__user-info">
        <div className="slider__user--images">
          <img src={userImage} alt="" className="slider__user-image slider__user-image--profile" />
          <img src={userCountry} alt="" className="slider__user-image slider__user-image--country" />
        </div>
        <span className="slider__user-name">{userName}</span>
        <span className="slider__user-comment">{userComment}</span>
      </div>
    </div>
  )
}

export default UserCard

