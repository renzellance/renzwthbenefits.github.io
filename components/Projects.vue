<template>
  <section id="projects-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Projects
        </h1>
        <div class="columns">
          <div class="column is-half">
            <h2 class="subtitle">
              This is the projects page.
            </h2>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#skills-section')"
            >
              What I've learned so far
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>
