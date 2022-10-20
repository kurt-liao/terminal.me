import { getProfile, getStats } from '~/api'
import { launchUrl } from '../launchUrl'
import config from '~/assets/config.json'

export const about = async (): Promise<string> => {
  return await getProfile()
}

export const stats = async (): Promise<string> => {
  return await getStats()
}

export const blog = async (): Promise<string> => {
  return launchUrl(config.blogUrl, 'blog')
}

export const resume = async (): Promise<string> => {
  return launchUrl(config.resumeUrl, 'resume')
}

export const github = async (): Promise<string> => {
  return launchUrl(config.githubUrl, 'github')
}

export const linkedin = async (): Promise<string> => {
  return launchUrl(config.linkedinUrl, 'linkedin')
}

export const repo = async (): Promise<string> => {
  return launchUrl(config.repoUrl, 'repository')
}

export const articles = async (): Promise<string> => {
  return `<a target="_blank" href="https://medium-story.vercel.app/api?username=@s09001&is_link=true"><img src="https://medium-story.vercel.app/api?username=@s09001"></a>

  <a target="_blank" href="https://medium-story.vercel.app/api?username=@s09001&index=1&is_link=true"><img src="https://medium-story.vercel.app/api?username=@s09001&index=1"></a>
  `
}
