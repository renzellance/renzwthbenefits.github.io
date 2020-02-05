<template>
  <section id="hero-section" class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column is-half">
            <h1
              v-anime="{ translateX: 150, duration: 500, direction: 'alternate', easing: 'easeInOutSine' }"
              class="title"
            >
              Hi, I'm Renzel.
            </h1>
            <h2 class="subtitle">
              I'm a full-stack developer. <br class="is-hidden-desktop"> Nice to meet you.
            </h2>
            <a
              class="button is-dark is-inverted is-outlined"
              @click="$scrollTo('#projects-section')"
            >
              See what I'm working on
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
