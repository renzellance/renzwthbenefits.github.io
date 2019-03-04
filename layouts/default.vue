<template>
  <section
    class="hero is-medium is-bold is-fullheight"
    :class="darkMode"
  >
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link
              to="/"
              class="navbar-item main-link"
            >
              <span @click="isDark = !isDark">
                renzelmanlapaz.com
              </span>
            </nuxt-link>
            <span
              class="navbar-burger burger"
              :class="{ 'is-active' : showNav }"
              @click="showNav = !showNav"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div
            :class="{ 'is-active' : showNav }"
            class="navbar-menu"
          >
            <div class="navbar-end">
              <nuxt-link
                to="/about"
                class="navbar-item"
              >
                About Me
              </nuxt-link>
              <nuxt-link
                to="/projects"
                class="navbar-item"
              >
                Projects
              </nuxt-link>
              <nuxt-link
                to="/contact"
                class="navbar-item">
                Contact
              </nuxt-link>
              <nuxt-link
                to="/blog"
                class="navbar-item">
                Blog
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <nuxt />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      isDark: false
    }
  },
  computed: {
    darkMode() {
      return this.isDark ? 'is-dark' : 'is-light'
    }
  }
}
</script>

<style lang="scss" src="~/assets/default.scss" />
