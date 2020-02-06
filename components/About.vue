<template>
  <section id="about-section" class="hero is-medium is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-4-mobile">
          About Me
        </h1>
        <div class="columns is-vcentered">
          <div class="column is-half">
            <p class="subtitle">
              I'm your stereotypical programmer - one who doesn't live an active lifestyle. I'm basically a couch potato despite what the
              images I've put up here seem to imply. In my spare time, you'll find me playing video games and board games with my friends,
              binge watching a series, making up the most random songs or jingles with my guitar, or looking for the next best place to get
              some grub.
            </p>
            <p class="subtitle">
              I enjoy programming in general as it forces me to often think outside the box and encourages me to keep on learning.
              Ever since I was a child, I've been interested in technology, and due to my early exposure to gaming, I was fascinated with
              the concept of creating something out of virtually nothing and making money out of it. Selling pixels!
            </p>
            <p class="subtitle">
              It was an eye-opening moment for me, so during grade school I started self-studying and created a game using an app called
              RPGMaker XP. I remember learning Ruby back then in order to implement some of the custom functionality I wanted. I wasn't
              able to finish it in the end, but it's what got me into programming.
            </p>
            <p class="subtitle">
              Recently, I find myself wanting to pivot my career towards Product Management. Most of my time and attention is becoming
              more and more focused on UX and learning more about our users and the business end of things. I'm trying to get a better
              understanding of how I can bring better value to our customers through research, experimentation, and whatever other means
              and methods I have at my disposal.
            </p>
            <a
              class="button is-inverted is-outlined"
              @click="$scrollTo('#contact-section')"
            >
              Connect with me
            </a>
          </div>
          <div class="column is-half">
            <figure class="image is-3by2">
              <img src="/renzel.jpg" alt="Ironic image of me in a beach">
            </figure>
            <br>
            <figure class="image">
              <img src="/thinkathon.jpg" alt="Presenting at a Design Thinking Workshop">
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
