import { useState } from 'react'
import Header from './components/header/header';
import Content from './components/content/content';
import "./index.css";
import 'tailwindcss/tailwind.css';
import Burger from './components/burger/burger';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='container mx-auto flex flex-col'>
        <Header></Header>
        <Content></Content>
      </body>
    </>
  )
}
export default App
