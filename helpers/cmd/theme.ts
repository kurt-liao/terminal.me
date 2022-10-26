import Themes from '~/assets/themes.json'

export const theme = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme
  - random: set a random theme

Example: 
  theme ls # to list all themes
  theme set 3024Day # to set a theme`
  }

  switch (args[0]) {
    case 'ls': {
      let result = 'Here are available themes: \n'
      result += '['
      result += Themes.map(theme => theme.name.toLowerCase()).join(', ')
      result += ']'
      result += '\n\n'
      result += 'You can preview all these themes <a target="_blank" href="https://github.com/kurt-liao/terminal.me/tree/main/assets/themes.json">in the docs</a>'

      return result
    }
    case 'set': {
      const selectedTheme = args[1]

      return callback(selectedTheme)
    }
    case 'random': {
      const randomTheme = Themes[Math.floor(Math.random() * Themes.length)]

      return callback(randomTheme.name.toLowerCase())
    }
    default: {
      return 'This option is not exist in theme command. Type \'theme\' to see what options you can use.'
    }
  }
}
