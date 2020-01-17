<template>
  <section id="projects-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Current work and projects
        </h1>
        <div class="columns is-vcentered is-centered">
          <div class="column is-full">
            <p class="subtitle">
              I have been working for 2 years now as a <strong>Full-Stack Engineer</strong> for
              <a title="Import Genius website" href="https://www.importgenius.com">Import Genius</a> while based in the Philippines.
              The project I'm currently assigned to is the main website, linked above. I lead a team of seven people working on various
              tasks such as the migration of the legacy pages, creating A/B tests to try out new acquisition strategies and site performance
              and SEO optimizations. Some of the challenges we encountered so far were....
              Some of the solutions we implemented to mitigate these were....
            </p>
            <p class="subtitle">
              I also have had the chance to work as the lead of the development team working on the front end of the new version of the
              <a title="Import Genius website" href="https://next.importgenius.com">app</a>. Some of the responsibilities I was given are
              accountability for uptime, mentoring the newer members
            </p>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#skills-section')"
            >
              What I use to get things done
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
