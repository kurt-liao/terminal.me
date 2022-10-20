import * as cmd from './cmd'

export const checkCommand = (command: string) => {
  const commands = ['clear', ...Object.keys(cmd)]

  return commands.indexOf(command.split(' ')[0]) !== -1
}
