export const launchUrl = async (url: string, urlName: string) => {
  setTimeout(() => {
    window.open(url)
  }, 700)
  return `Opening my ${urlName} in new tab...`
}
