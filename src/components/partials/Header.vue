<template>
  <nav class="navbar navbar-expand-lg navbar-light border-bottom bg-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand fs-4" to="/">
          <img 
              class="header-logo"
              v-bind:src="`${publicPath}${logoImgLink}`">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" v-on:click="isMenuBtnActive = !isMenuBtnActive">
          <div class="menu-btn" v-bind:class="{active : isMenuBtnActive}">
          </div>
        </span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="navItem in navItems" :key="navItem.name">
            <router-link class="nav-link" v-bind:class="{active: navItem.isActive}" aria-current="page" v-bind:to=navItem.link>{{ navItem.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  data: function(){
    return {
      publicPath: process.env.BASE_URL,
      logoImgLink: `assets/img/WebLogo.png`,
      spacerStyle: {},
      navItems: [
      {
        name: 'Home',
        link: '/',
        isActive: true,
      },
      {
        name: 'Contact',
        link: '/contact',
        isActve: false,
      },
      {
        name: 'About',
        link: '/about',
        isActve: false,
      },
      ],
      isMenuBtnActive: false,

    }
  },
  method() {
    return {
      activeToggle(){
        this.isActive = false;
      },
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  width: 100%;
}
.header-logo{
  height: 40px;
  min-width: 200px;
  max-width: 250px;
  width: 20vw;
}
.menu-btn {
  --size: 40px;
  --animate-duration: 0.5s;
  width: var(--size);
  height: var(--size);
  margin-right: 20px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transform: translateY(-5px);
}

.menu-btn::before {
  content: "";
  background-color: #000;
  width: calc(var(--size) / 2);
  height: 2px;
  box-shadow: 0 calc(var(--size) / -7) 0 #000;
  transition: var(--animate-duration);
}
.menu-btn::after {
  content: "";
  background-color: #000;
  width: calc(var(--size) / 2);
  height: 2px;
  box-shadow: 0 calc(var(--size) / 7) 0 #000;
  margin-top: -2px;
  transition: var(--animate-duration);
}
.active.menu-btn::after {
  transition: var(--animate-duration);
  transform: rotate(-45deg);
  box-shadow: unset;
}
.active.menu-btn::before {
  transition: var(--animate-duration);
  transform: rotate(45deg);
  box-shadow: unset;
}
.navbar-toggler{
  border: none;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}
</style>