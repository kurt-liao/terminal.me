import axios from 'axios'

export const about = async (): Promise<string> => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/kurt-liao/kurt-liao/master/README.md',
  )
  return data
}
