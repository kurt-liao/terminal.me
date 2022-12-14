import config from '~/assets/config.json'
import { cmdWtihDescription } from '~/helpers/cmdWithDescription'

export const man = async (): Promise<string> => {
  const commands = cmdWtihDescription()
  return `You can use following commands: \n\n${commands
    .map(cmd => `${cmd}\n`)
    .join(
      '',
    )}\n\n===========Other commands============\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.\n[ArrowUp] recall previously-enterd command\n[ArrowDown] call next-enterd command`
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const date = async (): Promise<string> => {
  return new Date().toString()
}

export const sudo = async (): Promise<string> => {
  return '<p style="color: #db2d20">Permission denied: unable to run the command \'undefined\' as root.</>'
}

export const hello = async (): Promise<string> => {
  return `
<div style="color: #00DC82;">
<pre>
██╗  ██╗██╗   ██╗██████╗ ████████╗    ██╗     ██╗ █████╗  ██████╗ 
██║ ██╔╝██║   ██║██╔══██╗╚══██╔══╝    ██║     ██║██╔══██╗██╔═══██╗
█████╔╝ ██║   ██║██████╔╝   ██║       ██║     ██║███████║██║   ██║
██╔═██╗ ██║   ██║██╔══██╗   ██║       ██║     ██║██╔══██║██║   ██║
██║  ██╗╚██████╔╝██║  ██║   ██║       ███████╗██║██║  ██║╚██████╔╝
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
</pre>
</div>
<div style="font-size: 1.2rem;">
<div style="color: #53E8AA;">
<p>Welcome to my interactive website. Built with Nuxt3 & ❤️.</p>
<p>It's the terminal style site let you type some commands to interact with me😁.</p>
</div>
<p style="color: #ffd966">Type 'man' to see list of available commands.</p>
--
<p style="color: #aceace">
The project is open-source 🎉 type 'repo' to check out the repository.

If you like it, follow <a href="${config.githubUrl}" target="_blank">Me</a>, check out the <a href="https://github.com/kurt-liao/terminal.me">Repo</a> and also give it a <a href="https://github.com/kurt-liao/terminal.me/stargazers" target="_blank"><span style="color: yellow">STAR</span></a>, please😇.
</p>
--
</div>
`
}
