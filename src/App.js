import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar'
//import routes from './routes/path'
import categoriesContext from './Context'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'

function App() {
 
   const [categories, setCategories] = useState(null)
   const value = {categories, setCategories}
  return (
    <Flex>
      <categoriesContext.Provider value={value}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
        {/* <Routes>
          {routes.map((route, i) => {
            return (
              <Route key={i} path={route.path} element={<route.element/>} />
            )
          })}
        </Routes> */}
      </categoriesContext.Provider>
    </Flex>
  )
}

export default App
