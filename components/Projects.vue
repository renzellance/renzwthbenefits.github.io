<template>
  <section id="projects-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Current work and other projects
        </h1>
        <div class="columns is-vcentered is-centered">
          <div class="column is-full">
            <p class="subtitle">
              I have been working for 2 years now as a <strong>Full-Stack Engineer</strong> for
              <a title="Import Genius website" href="https://www.importgenius.com">Import Genius</a>, a business intelligence company
              leveraging on import and export data. The project I'm currently assigned to is the main website, linked above. I lead a
              team of seven people working on various tasks such as the migration of the legacy pages, creating A/B tests to try out
              new acquisition strategies as well as site performance and SEO optimizations. As a small, fast-paced team, we encounter
              several riveting challenges on a day-to-day basis, from major issues like shipment data management (validation, parsing,
              normalization, and the like) and speeding up response times through service workers, CDNs and HTTP accelerators - to
              seemingly trivial but equally significant chores such as ensuring that all our metrics through Google Analytics and other
              services are accurate and troubleshooting bugs and urgent changes that come up from time to time. Other than engineering,
              my role in the team has also been to facilitate sprint meetings, backlog management and setting up goals and milestones
              for everyone.
            </p>
            <p class="subtitle">
              Before this, I also had the opportunity to lead the front end development team working on the new version of the
              <a title="Import Genius app" href="https://app.importgenius.com">app</a>. My responsibilities were mostly the same as when
              I moved to the site team while also mentoring some of the newer hires and often leading discussions regarding implementation
              with the back end and devops teams. Along with the migration of old features and implementation of new ones, we had to
              tackle UI and UX problems such as the slow perceived loading times of the app, which we solved by caching with service workers,
              pre-fetching data, and re-organizing some of the APIs to be more RESTful. We also helped out with some of the architecture such
              as how features like the search and subscription are structured and validated.
            </p>
            <p class="subtitle">
              Some of the smaller projects I've worked on:
            </p>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <p class="subtitle">
                  <a title="Import Genius vigilance" href="https://vigilance.importgenius.com">Vigilance</a> - a service monitoring dashboard
                  application used by Import Genius to alert the developers by showing them at a glance when anything goes wrong with the
                  services and servers that it's been integrated with.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/vigilance.png">
                </figure>
              </div>
            </div>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <p class="subtitle">
                  <a title="Monster Battle Game" href="https://vue-monster-game.herokuapp.com/">Monster Battling Game</a> - a simple turn-based
                  text-based monster battling game with different possible moves such as attacking and healing. It also logs the user's and monster's
                  last moves and displays it below. The base game came from a guide that I followed and I simply improved it by changing up how the
                  moves work. I used it to learn Vue.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/monsterbattle.png">
                </figure>
              </div>
            </div>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#skills-section')"
            >
              How I get things done
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
