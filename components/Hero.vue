<template>
  <section class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title">
              Hi, I'm Renzel.
            </h1>
            <h2 class="subtitle">
              Full Stack Developer
            </h2>
            <a
              class="button is-dark is-inverted is-outlined"
              href="/resume.pdf"
              download="Renzel Manlapaz Resume"
            >
              DOWNLOAD RESUME
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
  name: 'Hero'
}
</script>
