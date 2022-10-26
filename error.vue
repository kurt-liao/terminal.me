<script setup>
if (process.client)
  watchEffect(() => clearError({ redirect: '/' }))
</script>

<template>
  <div />
</template>
