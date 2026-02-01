import React from 'react'
import Virtual from './virtual-list/Virtual'
import NonVirtual from './non-virtual-list/NonVirtual'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const numberOfItems=1000000;

const routeConfig=[
  { path:'/virtualized',element:<Virtual numberOfItems={numberOfItems}/>},
  { path:'/non-virtualized',element:<NonVirtual numberOfItems={numberOfItems}/>}
]
const App = () => {
  return (
    <BrowserRouter>
    <div className='w-screen h-screen overflow-hidden'>
         <div>React Concepts</div>
         <Router />
    </div>
    </BrowserRouter>
  )
}
const Router=()=>{
  const router=useRoutes(routeConfig);
  return router;
}
export default App