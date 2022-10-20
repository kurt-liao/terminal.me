type ShellContext = Reactive<{
  histories: Ref<Array<History>>
  command: Ref<string>
  lastCommandIndex: Ref<number>

  setHistory: (output: string) => void
  setCommand: (command: string) => void
  setLastCommandIndex: (index: number) => void
  execCommand: (command: string) => Promise<void>
  clearHistories: () => void
}>
