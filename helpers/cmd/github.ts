import config from '~/assets/config.json'

export const github = async (): Promise<string> => {
  throw new Error('asdawd')
  window.open(`${config.githubUrl}`)
  return 'Opening my github in new tab...'
}
