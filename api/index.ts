import axios from 'axios'
import config from '~/assets/config.json'

export const getProfile = async () => {
  const { data } = await axios.get(`${config.profileUrl}`)
  return data
}

export const getStats = async () => {
  const { data } = await axios.get(`${config.statsUrl}`)
  return data
}
