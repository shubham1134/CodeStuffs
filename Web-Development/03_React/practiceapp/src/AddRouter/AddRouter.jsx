import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from '../Components/Home/Home'

function AddRouter() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path = "" element={<Home/>}/>
  
</Routes>
</BrowserRouter>
</>
  )
}

export default AddRouter
