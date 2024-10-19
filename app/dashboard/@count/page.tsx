import axios from 'axios'
import React from 'react'

const CountPage = async () => {
  const countLocations = await axios.get("http://localhost:3000/locations")
  return countLocations.data
}

export default CountPage