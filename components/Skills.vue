<template>
  <section id="skills-section" class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          My skills and experiences
        </h1>
        <div class="columns">
          <div class="column is-half">
            WORD CLOUD HERE
          </div>
          <div class="column is-half">
            <p class="subtitle">
              Over time, I've had the opportunity to tackle all sorts of programming languages, practices, and technologies.
              I've created a word cloud to express all of this, where the biggest words are the ones I'm most confident in.
            </p>
            <p class="subtitle">
              I refrained from creating a fancy shmancy animated star or percentage skill rating component for this because it's
              extremely difficult to determine at which point a developer is in terms of knowledge and experience with a certain
              technology. There is always room for improvement.
            </p>
            <p class="subtitle">
              If you need more details, feel free to ask me or download a copy of my resumé
              <a
                class="has-text-link"
                @click="$scrollTo('#contact-section')">here</a>.
            </p>
            <a
              class="button is-dark is-inverted is-outlined"
              @click="$scrollTo('#about-section')">
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>
