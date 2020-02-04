<template>
  <section id="contact-section" class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title is-size-4-mobile">
              Let's stay in touch
            </h2>
            <div class="columns is-mobile">
              <div class="column is-narrow">
                <a title="Github link" href="https://github.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="LinkedIn link" href="https://www.linkedin.com/in/renzwthbenefits"><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Facebook link" href="https://www.facebook.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Twitter link" href="https://www.twitter.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Instagram link" href="https://www.instagram.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" /></a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-narrow">
                <a
                  class="button is-dark is-inverted is-outlined"
                  title="Download resume"
                  href="/resume.pdf"
                  download="Renzel Manlapaz Resume"
                >
                  Download my resumé
                </a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-narrow">
                <a
                  title="Send an email"
                  href="mailto:renzman8@gmail.com"
                ><font-awesome-icon :icon="['fas', 'envelope']" /> : renzman8@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <h2 class="title is-size-4-mobile">
              Send me a message
            </h2>
            <h3 class="subtitle is-small is-size-6-mobile">
              Got questions or want to collaborate on cool, new things?
            </h3>
            <div class="field">
              <label class="label has-text-light">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="How you want to be addressed">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-light">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="I'll be referring to this email when I reply">
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-light">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Ask me anything under the sun" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button
                  class="button is-dark is-inverted is-outlined"
                  @click="submit"
                >
                  Send
                </button>
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
  name: 'Contact',
  methods: {
    submit() {
      alert(
        `Sorry, this feature doesn't work yet. Please feel free to send an email to renzman8@gmail.com for now if you want to contact me.`
      )
    }
  }
}
</script>
