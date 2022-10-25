<script setup lang="ts">
const HEAD_META = [
  {
    name: 'description',
    content: 'Here is Kurt | Follow me on Github @kurt-liao',
  },
  // Facebook
  {
    name: 'og:url',
    content: 'https://me.kurtstories.com/',
  },
  {
    name: 'og:type',
    content: 'website',
  },
  {
    name: 'og:title',
    content: 'Kurt.me',
  },
  {
    name: 'og:description',
    content: 'Here is Kurt | Follow me on Github @kurt-liao',
  },
  {
    name: 'og:image',
    content:
      'https://raw.githubusercontent.com/kurt-liao/terminal.me/main/public/logo.svg',
  },
  // Twitter
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:domain',
    content: 'me.kurtstories.com',
  },
  {
    name: 'twitter:url',
    content: 'https://me.kurtstories.com/',
  },
  {
    name: 'twitter:title',
    content: 'Kurt.me',
  },
  {
    name: 'twitter:description',
    content: 'Here is Kurt | Follow me on Github @kurt-liao',
  },
  {
    name: 'twitter:image',
    content:
      'https://raw.githubusercontent.com/kurt-liao/terminal.me/main/public/logo.svg',
  },
]

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Kurt.me',
  meta: HEAD_META,
})
</script>

<template>
  <ThemeProvider>
    <ShellProvider>
      <NuxtLayout> <NuxtPage /></NuxtLayout>
    </ShellProvider>
  </ThemeProvider>
</template>
