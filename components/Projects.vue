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
              I'm currently working as an Associate Product Manager for <a title="Import Genius website" href="https://www.importgenius.com" rel="nofollow">ImportGenius</a>,
              a business intelligence company that leverages import and export data. I began my career as a Full Stack Engineer for the same
              company in January 2018. From there I was given the opportunity to take on lead roles from managing the feature development
              of the product, to taking on the project of migrating the major pages of the site to a new stack. I was also able to play with our
              DevOps and data stack, so I was able to build a pretty wide range of skills. I ended up liking having the breadth of knowledge so
              product &amp; product management came natural for me to pursue.
            </p>
            <p class="subtitle">
              My primary goal right now as Associate Product Manager is to improve the acquisition and activation process of ImportGenius.
              I create strategies, roadmaps, specs, and build features around that. I also analyze the data we collect and find areas we can
              experiment on to optimize our processes &amp; funnels. Since I have a technical background, from time to time I still take on dev tasks and make minor changes
              to our code.
            </p>
            <p class="subtitle">
              <strong>Some of the smaller dev projects I've been able to work on:</strong>
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
