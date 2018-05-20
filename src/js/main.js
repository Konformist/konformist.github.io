'use strict';

import Vue from 'vue';
import About from './components/about';
import Works from './components/works';
import Skills from './components/skills';

new Vue({
  el: '#app',
  template: `
    <div class="body-wrapper">
      <header>
        <i class="material-icons burger-menu" @click="show.menu = !show.menu">menu</i>
      </header>
      <main>
        <div class="frame-block">
          <transition name="fade" mode="out-in">
            <about v-if="frame === 'about'" key="about"></about>
            <works v-if="frame === 'works'" key="works"></works>
            <skills v-if="frame === 'skills'" key="works"></skills>
          </transition>
        </div>
        <nav class="sidebar" :class="show.menu ? 'visible' : ''">
          <ul class="lists-block">
            <li class="list"
              :class="frame === tab.name ? 'active' : ''"
              v-for="(tab, index) in tabs"
              @click="frame = tab.name; show.menu = false"
              :key="index"
              >
              {{ tab.text }}
            </li>
          </ul>
        </nav>
      </main>
      <footer>
        <div class="lists-block contacts">
          <a class="list contact-email" href="mailto: konstantin.yakovlev.8888@gmail.com">
            Мой email
          </a>
          <!-- <a class="github" href="https://github.com/Konformist"> -->
          <!-- My GitHub Repo -->
          <!-- </a> -->
        </div>
      </footer>
    </div>
  `,

  data: {
    tabs: [
      {
        name: 'about',
        text: 'Обо мне',
      },
      {
        name: 'works',
        text: 'Портфолио',
      },
      {
        name: 'skills',
        text: 'Навыки',
      },
    ],
    frame: 'about',
    show: {
      menu: false,
    }
  },
});