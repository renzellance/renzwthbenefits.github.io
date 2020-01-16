<template>
  <section id="skills-section" class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          My skills and experiences
        </h1>
        <div class="columns">
          <div class="column is-half">
            <vue-word-cloud
              :words="words"
              :color="colors"
            />
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
                @click="$scrollTo('#contact-section')"
              >here</a>.
            </p>
            <a
              class="button is-dark is-inverted is-outlined"
              @click="$scrollTo('#about-section')"
            >
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueWordCloud from 'vuewordcloud'

export default {
  name: 'Skills',
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  data() {
    return {
      availableColors: [
        'Salmon',
        'Tomato',
        'Moccasin',
        'RosyBrown',
        'Chocolate',
        'Sienna',
        'CornflowerBlue',
        'PaleTurquoise',
        'MediumSeaGreen',
        'PaleGoldenrod'
      ],
      words: [
        ['vue', 10],
        ['nuxt', 10],
        ['javascript', 10],
        ['node', 8],
        ['express', 8],
        ['AWS', 8],
        ['SASS', 8],
        ['git', 8],
        ['PHP', 6],
        ['bash', 6],
        ['SQL', 6],
        ['elasticsearch', 6],
        ['react', 4],
        ['BDD', 4],
        ['python', 4],
        ['mongodb', 4],
        ['TDD', 4]
      ],
      colors: () => this.availableColors[Math.floor(Math.random() * 10)]
    }
  }
}
</script>
