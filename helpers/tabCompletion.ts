import * as cmd from './cmd'

export const tabCompletion = (command: string) => {
  const commands = ['clear', ...Object.keys(cmd)].filter((_command: string) =>
    _command.startsWith(command),
  )

  return commands.length === 1 ? commands[0] : null
}
