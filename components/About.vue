<template>
  <section id="about-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          About Me
        </h1>
        <div class="columns is-vcentered">
          <div class="column is-half">
            <p class="subtitle">
              I'm your stereotypical programmer, I don't live an active lifestyle; I'm basically a couch potato. In my spare time,
              you'll find me playing video games and board games with my friends, binge watching a series, making up the most random
              songs or jingles with my guitar, or looking for the next best place to get some grub.
            </p>
            <p class="subtitle">
              I enjoy programming in general as it forces me to often think outside the box and encourages me to keep on learning.
              Ever since I was a child, I've been interested in technology, and my early exposure to gaming made me fascinated with
              the concept of creating something out of virtually nothing and selling it. Selling pixels!
            </p>
            <p class="subtitle">
              It was an eye-opening moment for me, so in grade school I started self-studying and created a game using an app called
              RPGMaker XP. I remember learning Ruby back then in order to implement some of the custom functionality I wanted. I wasn't
              able to finish it, but it's what introduced me to programming.
            </p>
            <p class="subtitle">
              Right now, I'm interested in pivoting my career towards Product Management. Recently, I noticed that most of my interest
              has become more focused in UX and learning about our potential customers. I want to have a better understanding of how I
              can bring better value to users through research, experimentation and whatever other information I can get my hands on.
            </p>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#contact-section')"
            >
              Connect with me!
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
