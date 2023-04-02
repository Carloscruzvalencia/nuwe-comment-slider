import React from 'react'
import {UserCard} from "./components";

import * as images from "./assets/images/personImages"; 
// images.Image1

const App = () => {
  return (
    <div className='App'>
        <UserCard userImage={images.image1} userName="carlos cruz" userComment="buenas patatas"></UserCard>
    </div>
  )
}
export default App