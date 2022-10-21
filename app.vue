<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Kurt.me',
  meta: [
    {
      name: 'description',
      content: 'Here is Kurt | Follow me on Github @kurt-liao',
    },
  ],
})
</script>

<template>
  <ThemeProvider>
    <ShellProvider>
      <NuxtLayout> <NuxtPage /></NuxtLayout>
    </ShellProvider>
  </ThemeProvider>
</template>
