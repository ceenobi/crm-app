import React, { useState, useEffect, useContext } from 'react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'

import TicketCard from '../components/TicketCard'
import categoriesContext from '../Context'

export default function Dashboard() {
  const [tickets, setTickets] = useState(null)
  const {setCategories} = useContext(categoriesContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://ticketcrm.herokuapp.com/tickets')

      const dataObject = response.data.data

      const arrayOfKeys = Object.keys(dataObject)
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
      const formattedArray = []
      arrayOfKeys.forEach((key, index) => {
        const formmatedData = { ...arrayOfData[index] }
        formmatedData['documentId'] = key
        formattedArray.push(formmatedData)
      })
      setTickets(formattedArray)
    }

    fetchData()
  }, [])

  useEffect(()=> {
    setCategories([...new Set(tickets?.map(({category})=>category))])
  }, [tickets, setCategories])

  const colors = ['#BB6464', '#346751', '#C84B31', '#ECDBBA']

  const uniqueCategories = [
   ...new Set(tickets?.map(({ category }) => category))
  ]

  return (
    <Box p={5} w='100%'>
      <Box textStyle='h1'>My Projects</Box>
      <Box h='80vh' overflowX='scroll' mt={4}>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <Box key={categoryIndex} mb={4}>
              <Box textStyle='p' mb={4} fontWeight='bold'>
                {uniqueCategory}
              </Box>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    key={_index}
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </Box>
          ))}
      </Box>
    </Box>
  )
}
