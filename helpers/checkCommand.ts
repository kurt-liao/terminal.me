import * as cmd from './cmd'

export const checkCommand = (command: string) => {
  const commands = ['clear', ...Object.keys(cmd)]

  return commands.includes(command.split(' ')[0])
}
