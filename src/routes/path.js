import Dashboard from '../pages/Dashboard'
import TicketPage from '../pages/TicketPage'

//const editMode = true

const routes = [
  {
    path: '/',
    exact: true,
    element: Dashboard,
  },
  {
    path: '/ticket',
    element: TicketPage,
  },
  {
    path: '/ticket/:id',
    element: TicketPage,
    
    // {
    // //   TicketPage,
    // //   editMode: { editMode },
    // // }
  },  
]

export default routes