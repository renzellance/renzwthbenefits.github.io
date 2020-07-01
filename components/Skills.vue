<template>
  <section id="skills-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Skills and technologies
        </h1>
        <div class="columns">
          <div class="column is-half">
            <vue-word-cloud
              :words="words"
              :color="colors"
              font-family="Roboto"
            />
          </div>
          <div class="column is-half">
            <p class="subtitle">
              Over time, I've had the opportunity to familiarize myself with all sorts of programming languages, best practices,
              and development processes.
            </p>
            <p class="subtitle">
              I spend most of my time working with frameworks, languages, and tools such as Nuxt (Vue), Express (Node), ElasticSearch,
              and SQL. I also often work on devops tasks such as managing and maintaining our AWS setup (instances, load balancers, CDN,
              data storage options like S3 and EBS, etc.), NGINX configs, and CI/CD through Gitlab. I've also familiarized myself with
              unit testing frameworks like Jest as well as techniques like TDD, BDD and DDD.
            </p>
            <p class="subtitle">
              If you need more details, feel free to ask me or download a copy of my resumé
              <a
                class="has-text-link"
                title="Download resume"
                href="/resume.pdf"
                download="Renzel Manlapaz Resume"
              >here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueWordCloud from 'vuewordcloud'

function shuffleArray(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export default {
  name: 'Skills',
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  data() {
    return {
      availableColors: shuffleArray([
        'Aqua',
        'MediumSpringGreen',
        'DeepPink',
        'Wheat',
        'FireBrick',
        'SteelBlue',
        'DarkSlateGray',
        'LightCoral',
        'Thistle',
        'PaleGoldenrod'
      ]),
      words: shuffleArray([
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
      ]),
      colors: () => this.availableColors[Math.floor(Math.random() * 10)]
    }
  }
}
</script>
