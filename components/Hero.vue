<template>
  <section id="hero-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column">
            <h1 class="title is-size-1">
              Hi, I'm Renzel.
            </h1>
            <h2 class="subtitle is-size-4-mobile">
              I'm a full-stack developer hoping to get into Product Management.
            </h2>
            <h2 class="subtitle is-size-4-mobile">
              Nice to meet you.
            </h2>
            <a
              class="button is-size-5-mobile has-text-weight-bold has-text-white-bis has-bg-primary-color"
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
