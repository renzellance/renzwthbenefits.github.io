<template>
  <section id="about-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          About Me
        </h1>
        <div class="columns">
          <div class="column is-half">
            <p class="subtitle">
              I'm Renzel Manlapaz, I have been working for 2 years now as a <strong>Full-Stack Engineer</strong> for
              <a title="Import Genius website" href="https://www.importgenius.com">Import Genius</a> while based in the Philippines.
            </p>
            <p class="subtitle">
              I'm your stereotypical programmer, I don't live an active lifestyle; I'm basically a couch potato. In my spare time,
              you'll find me playing video games and board games with my friends, binge watching a series, making up the most random
              songs or jingles with my guitar, or looking for the next best place to get some grub.
            </p>
            <p class="subtitle">
              I enjoy programming in general as it forces me to often think outside the box and encourages me to keep on learning.
            </p>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#contact-section')">
              Let's connect!
            </a>
          </div>
          <div class="column is-half">
            <figure class="image is-3by2">
              <img src="/renzel.jpg">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>
