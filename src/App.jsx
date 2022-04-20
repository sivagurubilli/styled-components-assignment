import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


import Button from './components/button'
function App() {
  

  return (
  <div style={{boxSizing:'border-box',textAlign:'center'}}>

<h1>Different buttons</h1>

<Button varient = 'contained' color='primary'>Primary Button</Button>
<Button varient='default'>Default button</Button>
<Button varient ='dashed'>Dashed button</Button>
<Button varient ='text'>Text button</Button>
<Button varient ='link'>Link button</Button>


  </div>
        
  )
}

export default App
