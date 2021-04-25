<template>
  <div>
    <hero />
    <projects />
    <about />
    <contact />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'

export default {
  layout: 'default',
  components: {
    Hero,
    About,
    Projects,
    Contact
  }
}
</script>
