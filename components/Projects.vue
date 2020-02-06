<template>
  <section id="projects-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-4-mobile">
          Current work and other projects
        </h1>
        <div class="columns is-vcentered is-centered">
          <div class="column is-full">
            <p class="subtitle">
              Since January 2018, I have been working as a <strong>Full-Stack Engineer</strong> for
              <a title="Import Genius website" href="https://www.importgenius.com" rel="nofollow">Import Genius</a>, a business
              intelligence company leveraging import and export data as a service.
            </p>
            <p class="subtitle">
              The project I'm currently assigned to is the main website, linked above. I work with a cross-functional team of seven
              developers and designers working on various tasks like migrating the legacy pages, creating A/B tests to try out
              new acquisition strategies, improving site performance, and other sorts of optimizations.
            </p>
            <p class="subtitle">
              As a small, fast-paced team, we encounter several interesting challenges on a day-to-day basis - from major issues like
              shipment data management (validation, parsing, normalization, and the like) and enhancing crawl rate and indexing scores
              from search engines (through SEO and SEM) - to seemingly trivial, but equally significant chores such as keeping up with
              our techinical debts and ensuring that all our metrics through Google Analytics and other services are accurate. Other than
              engineering, my role in the team has also been to facilitate sprint meetings, manage the backlog, plan the execution, and
              set up our goals and milestones.
            </p>
            <p class="subtitle">
              Before working on the site, I also had the opportunity to lead the front end development team, who was tasked to create the
              new version of the <a title="Import Genius app" href="https://app.importgenius.com" rel="nofollow">app</a>. My responsibilities
              were mostly the same as it is now but I also mentored some of the new hires and was often deeply involved in discussions with
              the back end and devops teams about the architecture and implementation of the app. Along with migrating old features and
              putting together new ones, we had to tackle a ton of UI and UX problems, one of them being the perceived slow loading times of
              the app, which we solved by using service workers, pre-fetching data, and re-organizing some of the APIs to make it more RESTful.
            </p>
            <p class="subtitle">
              <strong>Some of the smaller projects I've been able to work on:</strong>
            </p>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <p class="subtitle">
                  <a title="Import Genius vigilance" href="https://vigilance.importgenius.com" rel="nofollow">Vigilance</a> - a service monitoring dashboard
                  application used by Import Genius to alert the developers by showing them at a glance when anything goes wrong with the
                  services and servers that it's been integrated with.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/vigilance.png" alt="vigilance">
                </figure>
              </div>
            </div>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <p class="subtitle">
                  <a title="Monster Battle Game" href="https://vue-monster-game.herokuapp.com/index.html">Monster Battling Game</a> - a simple turn-based,
                  text-based monster battling game with a few possible moves such as attacking and healing. It also keeps a log of all actions at
                  the bottom. The base game came from a guide I used while learning Vue, I just added a few improvements to it.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/monsterbattle.png" alt="monster battle game">
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
