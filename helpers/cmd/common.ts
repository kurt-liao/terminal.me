import * as cmd from '../cmd'
import config from '~/assets/config.json'

export const man = async (args: string[]): Promise<string> => {
  const commands = Object.keys(cmd).sort().join(', ')
  return `You can use following commands: \n${commands}\n\n===========Other commands============\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command 'undefined' as root.`
}

export const hello = async (args?: string[]): Promise<string> => {
  return `
███╗   ███╗██╗  ██╗████████╗████████╗███████╗██████╗
████╗ ████║██║  ██║╚══██╔══╝╚══██╔══╝╚════██║╚════██╗
██╔████╔██║███████║   ██║      ██║       ██╔╝ █████╔╝
██║╚██╔╝██║╚════██║   ██║      ██║      ██╔╝ ██╔═══╝
██║ ╚═╝ ██║     ██║   ██║      ██║      ██║  ███████╗
╚═╝     ╚═╝     ╚═╝   ╚═╝      ╚═╝      ╚═╝  ╚══════╝ v${config.version}

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/m4tt72/terminal/tree/master/docs/themes">in the docs</a>.
New 🎉: New command 'neofetch', for you linux.
--
`
}
