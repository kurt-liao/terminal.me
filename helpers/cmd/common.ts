import * as cmd from '../cmd'
import config from '~/assets/config.json'
import { cmdWtihDescription } from '~/helpers/cmdWithDescription'

export const man = async (args: string[]): Promise<string> => {
  const commands = cmdWtihDescription()
  return `You can use following commands: \n\n${commands
    .map((cmd) => `${cmd}\n`)
    .join(
      '',
    )}\n\n===========Other commands============\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const sudo = async (args?: string[]): Promise<string> => {
  return `<p style="color: #db2d20">Permission denied: unable to run the command 'undefined' as root.</>`
}

export const hello = async (args?: string[]): Promise<string> => {
  return `
<div style="color: #00DC82;">

██╗  ██╗██╗   ██╗██████╗ ████████╗    ██╗     ██╗ █████╗  ██████╗ 
██║ ██╔╝██║   ██║██╔══██╗╚══██╔══╝    ██║     ██║██╔══██╗██╔═══██╗
█████╔╝ ██║   ██║██████╔╝   ██║       ██║     ██║███████║██║   ██║
██╔═██╗ ██║   ██║██╔══██╗   ██║       ██║     ██║██╔══██║██║   ██║
██║  ██╗╚██████╔╝██║  ██║   ██║       ███████╗██║██║  ██║╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
</div>
<div style="font-size: 1.2rem;">
<div style="color: #53E8AA;">
<p>Welcome to my interactive website. Built with Nuxt3 & ❤️</p>
<p>It's the terminal style site let you type some commands to interact with me.😁</p>
</div>
<p style="color: #ffd966">Type 'man' to see list of available commands.</p>
--
<p style="color: #aceace">
The project is open-source 🎉 type 'repo' to check out the repository.
If you think it's interesting, follow me on <a href="${config.githubUrl}" target="_blank">Github</a> and also give it a <span style="color: yellow">STAR</span>, please😇

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/kurt-liao/terminal.me/tree/main/assets/themes" target="_blank">in the docs</a>.
</p>
--
</div>
`
}
