<script setup lang="ts">
import * as cmd from '~/helpers/cmd'
import { History } from '~~/types/history'
import { ThemeContext } from '~~/types/theme'

const init = ref(true)
const histories = ref<Array<History>>([])
const command = ref('')
const lastCommandIndex = ref(0)
const theme: ThemeContext = inject('theme')

const setCommand = (_command: string) => {
  command.value = [Date.now(), _command].join(' ')
  init.value = false
}

const setHistory = (output: string) => {
  histories.value = [
    ...histories.value,
    {
      id: histories.value.length,
      date: new Date(),
      command: command.value.split(' ').slice(1).join(' '),
      output,
    },
  ]
}

const setLastCommandIndex = (index: number) => {
  lastCommandIndex.value = index
}

const clearHistories = () => {
  histories.value.length = 0
}

const execCommand = async () => {
  const [_cmd, ...args] = command.value.split(' ').slice(1)

  switch (_cmd) {
    case 'theme':
      if (args.length === 1) {
        theme.setTheme(args[0])
      }
      break
    case 'clear':
      clearHistories()
      break
    case '':
      setHistory('')
      break
    default:
      if (Object.keys(cmd).indexOf(_cmd) === -1) {
        setHistory(`Command not found: ${_cmd}. Try 'help' to get started.`)
      } else {
        try {
          const output = await cmd[_cmd](args)

          setHistory(output)
        } catch (error: any) {
          setHistory(`Exception occured: ${error.message}`)
        }
      }
      break
  }
}

watchEffect(() => {
  if (!init.value) {
    execCommand()
  }
})

provide<ShellContext>(
  'shell',
  reactive({
    histories,
    command,
    lastCommandIndex,

    setHistory,
    setCommand,
    setLastCommandIndex,
    execCommand,
    clearHistories,
  }),
)
</script>

<template>
  <slot />
</template>
