import * as cmd from '../cmd'

export const man = async (args: string[]): Promise<string> => {
  const commands = Object.keys(cmd).sort().join(', ')
  return `You can use following commands: ${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}
