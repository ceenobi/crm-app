import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  Stack,
  Button,
  Avatar,
  Flex,
} from '@chakra-ui/react'
// import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import { RenderIf } from '../components/RenderIf'
import {FormInput} from '../helpers/FormProps'
import categoriesContext from '../Context'

export default function TicketPage({editMode}) {
  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
  })

  const { categories} = useContext(categoriesContext)

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editMode) {
      const response = await axios.put(
        `https://ticketcrm.herokuapp.com/tickets/${id}`,
        {
          data: formData,
        }
      )
      const success = response.status === 200
      if (success) {
        navigate('/')
      }
    }
    if (!editMode) {
      const response = await axios.post('https://ticketcrm.herokuapp.com/tickets', {
        formData,
      })
      const success = response.status === 200
      if (success) {
        navigate('/')
      }
    }
  }

  const fetchData = async () => {
    const response = await axios.get(
      `https://ticketcrm.herokuapp.com/tickets/${id}`
    )
    setFormData(response.data.data)
  }
 
  useEffect(() => {
    const fetchCount = () => {
     if(editMode){
       fetchData()
     }
    }
    fetchCount()
  }, [editMode])

  const options = ['1', '2', '3', '4', '5']
  const statusUpdate = ['done', 'working on it', 'stuck', 'not started']

  return (
    <Box p={5} w='100%'>
      <RenderIf isTrue={editMode}>
        <Box textStyle='h1'>Update your ticket</Box>
      </RenderIf>
      <RenderIf isTrue={!editMode}>
        <Box textStyle='h1'>Create a ticket</Box>
      </RenderIf>
      <Flex justify='center' w='100%'>
        <form onSubmit={handleSubmit}>
          <Flex flexDirection={{ base: 'column', lg: 'row' }}>
            <Box w='500px' m='20px'>
              <FormControl>
                <FormInput
                  id='title'
                  type='text'
                  placeholder='Your Title'
                  name='title'
                  label='Title'
                  variant='flushed'
                  onChange={handleChange}
                  required
                  value={formData.title}
                />
              </FormControl>
              <FormControl>
                <FormInput
                  id='description'
                  type='text'
                  placeholder='Add a description'
                  name='description'
                  label='Description'
                  variant='flushed'
                  required
                  onChange={handleChange}
                  value={formData.description}
                />
              </FormControl>
              <FormControl mb={2}>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder='Select option'
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories?.map((category, _index) => (
                    <option key={_index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormInput
                  id='new-category'
                  type='text'
                  placeholder='Add a new category'
                  name='category'
                  label='New Category'
                  variant='flushed'
                  onChange={handleChange}
                  value={formData.category}
                />
              </FormControl>

              <FormControl mb={2}>
                <FormLabel>Priority</FormLabel>
                <RadioGroup name='priority'>
                  <Stack direction='row'>
                    {options.map((option, i) => (
                      <Radio
                        key={i}
                        value={option}
                        id='priority-1'
                        onChange={handleChange}
                      >
                        {option}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </FormControl>

              {editMode && (
                <>
                  <FormControl mb={2}>
                    <FormInput
                      id='progress'
                      type='range'
                      min='0'
                      max='100'
                      name='progress'
                      label='progress'
                      variant='unstyled'
                      required
                      onChange={handleChange}
                      value={formData.progress}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Select
                      placeholder='Select option'
                      name='status'
                      onChange={handleChange}
                    >
                      {statusUpdate.map((status, i) => (
                        <option key={i} value={status}>
                          {status}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </>
              )}
              <Button type='submit' mt={4} w='100%'>
                Submit
              </Button>
            </Box>

            <Box w='500px' m='20px'>
              <FormControl>
                <FormInput
                  id='owner'
                  type='text'
                  placeholder='Your Name'
                  name='owner'
                  label='Owner'
                  variant='flushed'
                  required
                  onChange={handleChange}
                  value={formData.owner}
                />
              </FormControl>
              <FormControl>
                <FormInput
                  id='avatar'
                  type='url'
                  placeholder='Your Avatar'
                  name='avatar'
                  label='Avatar'
                  variant='flushed'
                  required
                  onChange={handleChange}
                />
                <Box>
                  {formData.avatar && (
                    <Avatar
                      size='md'
                      name='Ryan Florence'
                      src={formData.avatar}
                    />
                  )}
                </Box>
              </FormControl>
            </Box>
          </Flex>
        </form>
      </Flex>
    </Box>
  )
}
