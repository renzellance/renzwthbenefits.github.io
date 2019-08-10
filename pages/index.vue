<template>
  <div>
    <hero />
    <about />
    <projects />
    <contact />
    <blog />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import About from '~/components/About'
import Projects from '~/components/Projects'
import Contact from '~/components/Contact'
import Blog from '~/components/Blog'

export default {
  layout: 'default',
  components: {
    Hero,
    About,
    Projects,
    Contact,
    Blog
  }
}
</script>
