<template>
  <section id="contact-section" class="hero is-medium is-bold is-fullheight is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title">
              Stay in touch with me
            </h2>
            <div class="columns is-mobile">
              <div class="column is-narrow">
                <a title="Renzel Manlapaz Github page" href="https://github.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'github']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Renzel Manlapaz LinkedIn page" href="https://www.linkedin.com/in/renzwthbenefits"><font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Renzel Manlapaz Facebook page" href="https://www.facebook.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Renzel Manlapaz Twitter page" href="https://www.twitter.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" /></a>
              </div>
              <div class="column is-narrow">
                <a title="Renzel Manlapaz Instagram page" href="https://www.instagram.com/renzwthbenefits"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" /></a>
              </div>
            </div>
            <div class="columns">
              <div class="column is-narrow">
                <a
                  class="button is-dark is-inverted is-outlined"
                  title="Download the resume of Renzel Manlapaz"
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
                  title="Send Renzel Manlapaz an email"
                  href="mailto:renzman8@gmail.com"
                ><font-awesome-icon :icon="['fas', 'envelope']" /> : renzman8@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <h2 class="title">
              Send me a message
            </h2>
            <h3 class="subtitle is-small">
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
                <input class="input" type="email" placeholder="The email will be cc'd to yours">
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
                <button class="button is-dark is-inverted is-outlined">
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
  name: 'Contact'
}
</script>
