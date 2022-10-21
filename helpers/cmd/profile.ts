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
  return `
  <p style="font-size: 1.2rem;margin-bottom: 10px;">My recently posts on <a href="${config.blogUrl}" target="_blank">blog</p><div style="display: flex"><a style="display: block; margin-right: 1em;"target="_blank" href="https://medium-story.vercel.app/api?username=@s09001&is_link=true"><img src="https://medium-story.vercel.app/api?username=@s09001"></a>
  <a style="display: block" target="_blank" href="https://medium-story.vercel.app/api?username=@s09001&index=1&is_link=true"><img src="https://medium-story.vercel.app/api?username=@s09001&index=1"></a></div>`
}
