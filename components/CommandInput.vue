<script setup lang="ts">
import { checkCommand } from '~/helpers/checkCommand'
import { tabCompletion } from '~/helpers/tabCompletion'
import { ThemeContext } from '~~/types/theme'

const props = defineProps(['containerRef'])

const input = ref('')
const inputRef = ref<HTMLFormElement>()

const { theme }: ThemeContext = inject('theme')
const shell: ShellContext = inject('shell')

watchEffect(() => {
  if (
    shell.histories &&
    props.containerRef &&
    props.containerRef.scrollHeight
  ) {
    props.containerRef.scrollTo(0, props.containerRef.scrollHeight)
  }
})

const onKeyDown = (e: KeyboardEvent) => {
  const key = e.key
  const code = e.code

  const commands = shell.histories
    .map(({ command }) => command)
    .filter((value: string) => value)

  if (key === 'Tab') {
    e.preventDefault()
    const result = tabCompletion(input.value)
    if (result) input.value = result
  }

  if (key === 'Enter' || code === '13') {
    e.preventDefault()
    shell.setLastCommandIndex(0)
    shell.setCommand(input.value)
    input.value = ''
  }

  if (e.ctrlKey) {
    if (key === 'l') {
      e.preventDefault()
      shell?.clearHistories()
    } else if (key === 'c') {
      shell?.setCommand('')
    }
  }

  if (key === 'ArrowUp') {
    e.preventDefault()

    if (!commands.length) return

    const idx = shell.lastCommandIndex + 1

    if (idx <= commands.length) {
      shell.setLastCommandIndex(idx)
      input.value = commands[commands.length - idx]
    }
  }

  if (key === 'ArrowDown') {
    e.preventDefault()

    if (!commands.length) return

    const idx = shell.lastCommandIndex - 1

    if (idx > 0) {
      shell.setLastCommandIndex(idx)
      input.value = commands[commands.length - idx]
    } else {
      shell.setLastCommandIndex(0)
      input.value = ''
    }
  }
}

const focus = () => {
  inputRef.value?.focus()
}

defineExpose({ focus })
</script>

<template>
  <label for="prompt" class="flex-shrink"></label>
  <div class="flex flex-row space-x-2">
    <Ps1 />
    <input
      v-model="input"
      ref="inputRef"
      id="prompt"
      type="text"
      class="focus:outline-none flex-grow"
      aria-label="prompt"
      :style="{
        backgroundColor: theme.background,
        color: checkCommand(input) || input === '' ? theme.green : theme.red,
      }"
      autofocus
      @keydown="onKeyDown"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
    />
  </div>
</template>
