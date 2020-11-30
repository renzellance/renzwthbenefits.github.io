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
              Since January 2018, I've been working as a <strong>Full-Stack Engineer</strong> for
              <a title="Import Genius website" href="https://www.importgenius.com" rel="nofollow">Import Genius</a>, a business
              intelligence company that leverages import and export data.
            </p>
            <p class="subtitle">
              The project I'm currently assigned to is the website, linked above. I work with a cross-functional team of six
              developers and a designer, working on various tasks like migrating the legacy pages, creating A/B tests to try out
              new acquisition strategies, improving site performance, and all sorts of other optimizations.
            </p>
            <p class="subtitle">
              As a small, fast-paced team, we encounter several interesting challenges on a day-to-day basis - issues like shipment data
              management (validation, parsing, normalization and the like) and enhancing crawl rate and indexing scores from search
              engines (through SEO and SEM). We also do a bit of maintenance throughout the stack, keeping our technical debts in check
              and ensuring that all our metrics through Google Analytics and other services are accurate. Other than engineering, my role
              in the team is also to facilitate sprint meetings, manage the backlog, plan the execution, and align the team's goals.
            </p>
            <p class="subtitle">
              Before working on the site, I also had the opportunity to lead the front end development team, in charge of creating the
              new version of the <a title="Import Genius app" href="https://app.importgenius.com" rel="nofollow">app</a>. My responsibilities
              were mostly the same as it is now but I was also able to mentor some of the new hires and was more often deeply involved in
              discussions with the back end and devops teams about the architecture and implementation specs of the app. While migrating old
              features and putting together new ones, we had to tackle a ton of UI and UX problems, an example the perceived slow loading
              times of the app, which we solved by using service workers, pre-fetching data, and re-organizing some of the APIs and making it
              more RESTful.
            </p>
            <p class="subtitle">
              <strong>Some of the smaller projects I've been able to work on:</strong>
            </p>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <a
                  title="Row Counterer"
                  href="https://www.renzelmanlapaz.com/rowcounterer"
                  class="is-size-4 is-size-5-mobile"
                >
                  Row Counterer
                </a>
                <p class="subtitle has-text-justified">
                  A web app for managing crochet/knit projects.  It functions as a simple and
                  easy row counter that also allows users to set prompts for increases and decreases in the pattern.
                  The project was created using Nuxt and stores data in the local storage.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/rowcounterer.png" alt="rowcounterer">
                </figure>
              </div>
            </div>
            <div class="columns is-centered is-vcentered">
              <div class="column is-half">
                <a
                  title="Monster Battle Game"
                  href="https://vue-monster-game.herokuapp.com/index.html"
                  class="is-size-4 is-size-5-mobile"
                >
                  Monster Battling Game
                </a>
                <p class="subtitle has-text-justified">
                  A simple turn-based, text-based monster battling game with a few possible moves such as attacking and healing.
                  It also keeps a log of all actions at the bottom. The base game came from a guide I read while learning Vue
                  with some added improvements.
                </p>
              </div>
              <div class="column is-half">
                <figure class="image is-2by1">
                  <img src="/monsterbattle.png" alt="monster battle game">
                </figure>
              </div>
            </div>
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
