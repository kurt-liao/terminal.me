<script setup lang="ts">
const shell: ShellContext | undefined = inject('shell')!
</script>

<template>
  <div v-for="history in shell.histories" :key="history.id">
    <div class="flex flex-row space-x-2">
      <div class="flex-shrink">
        <Ps1 />
      </div>
      <div class="flex-grow">{{ history.command }}</div>
    </div>

    <p
      class="whitespace-pre-wrap mb-2"
      style="line-height: normal"
      v-html="history.output"
    ></p>
  </div>
</template>
