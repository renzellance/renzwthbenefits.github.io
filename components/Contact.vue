<template>
  <section id="contact-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h2 class="title is-size-2-mobile">
          Let's stay in touch
        </h2>
        <div class="columns is-mobile">
          <div class="column is-narrow">
            <a title="Github link" href="https://github.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x has-text-grey-dark" /></a>
          </div>
          <div class="column is-narrow">
            <a title="LinkedIn link" href="https://www.linkedin.com/in/renzwthbenefits"><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x has-text-grey-dark" /></a>
          </div>
          <div class="column is-narrow">
            <a title="Facebook link" href="https://www.facebook.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x has-text-grey-dark" /></a>
          </div>
          <div class="column is-narrow">
            <a title="Twitter link" href="https://www.twitter.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x has-text-grey-dark" /></a>
          </div>
          <div class="column is-narrow">
            <a title="Instagram link" href="https://www.instagram.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x has-text-grey-dark" /></a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-narrow">
            <a
              class="button is-size-5-mobile has-text-weight-bold has-text-white-bis has-bg-primary-color"
              title="Download resume"
              href="/resume.pdf"
              download="Renzel Manlapaz Resume"
            >
              Download my resumé
            </a>
          </div>
        </div>
        <div class="columns">
          <div class="column is-narrow">
            <a
              title="Send an email"
              href="mailto:renzman8@gmail.com"
              class="has-text-grey-dark is-size-5-mobile"
            >
              <font-awesome-icon :icon="['fas', 'envelope']" /> : renzman8@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    submit() {
      alert(
        `Sorry, this feature doesn't work yet. Please feel free to send an email to renzman8@gmail.com for now if you want to contact me.`
      )
    }
  }
}
</script>
