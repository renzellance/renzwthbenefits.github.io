<template>
  <div>
    <hero />
    <projects />
    <skills />
    <about />
    <contact />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Skills from '~/components/Skills'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'

export default {
  layout: 'default',
  components: {
    Hero,
    About,
    Skills,
    Projects,
    Contact
  }
}
</script>
