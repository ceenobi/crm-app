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

  // const tickets = [
  //   {
  //     category: 'Q1 2020',
  //     title: 'NFT Safety tips',
  //     owner: 'Cobi Mac',
  //     avatar:
  //       'https://res.cloudinary.com/ceenobi/image/upload/v1629976310/Gadgets/bbd.hpthumb.fazepowerbeatspro.desktoptall.jpg.large.2x_c8lo3p.jpg',
  //       status: 'done',
  //       priority: 5,
  //       progress: 40,
  //       description: 'show how to make nft',
  //       timeStamp: '2022-05-13T07:36:17+0000'
  //   },
  //   {
  //     category: 'Q1 2020',
  //     title: 'Crypto Safety tips',
  //     owner: 'Ceenobi',
  //     avatar:
  //       'https://res.cloudinary.com/ceenobi/image/upload/v1629976310/Gadgets/bbd.hpthumb.fazepowerbeatspro.desktoptall.jpg.large.2x_c8lo3p.jpg',
  //       status: 'stuck',
  //       priority: 3,
  //       progress: 70,
  //       description: 'show how to trade crypto even if you are a novice',
  //       timeStamp: '2022-05-12T07:36:17+0000'
  //   },
  //   {
  //     category: 'Q2 2020',
  //     title: 'Sda Safety tips',
  //     owner: 'Ceenobi',
  //     avatar:
  //       'https://res.cloudinary.com/ceenobi/image/upload/v1629976310/Gadgets/bbd.hpthumb.fazepowerbeatspro.desktoptall.jpg.large.2x_c8lo3p.jpg',
  //       status: 'working on it',
  //       priority: 5,
  //       progress: 60,
  //       description: 'show how to trade crypto even if you are a novice',
  //       timeStamp: '2022-05-15T07:36:17+0000'
  //   },
  // ]

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
