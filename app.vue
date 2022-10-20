<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
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
