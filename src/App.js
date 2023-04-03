import React from 'react'
import { UserCard } from "./components";

import * as imagesPerson from "./assets/images/personImages";
import * as imagesCountry from "./assets/images/country";

import * as usData from "./assets/data/userData"


const App = () => {
  return (
    <div className='App'>
      <UserCard
        userImage={imagesPerson.image1}
        userCountry={imagesCountry.imageC1}
        userName={usData.userData1[0]}
        userComment={usData.userData1[1]}>
      </UserCard>
    </div>
  )
}
export default App