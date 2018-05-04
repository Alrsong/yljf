'use strict';

import Vue from 'vue'

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  props: ['title','unit'],
  template: '<button class="" v-on:click="count++">{{title}}:{{ count }} {{unit}}</button>'
})

// Vue.component('blog-post', {
//   props: ['post'],
//   template: '\
//     <div class="blog-post">\
//       <h3>{{ post.title }}</h3>\
//       <button v-on:click="$emit(\'enlarge-text\')">\
//         Enlarge text\
//       </button>\
//       <div v-html="post.content"></div>\
//     </div>\
//   '
// })
// new Vue({
//   el: '#blog-posts-events-demo',
//   data: {
//     posts: [
//       { id: 1, title: 'My journey with Vue', content: '...content...' },
//       { id: 2, title: 'Blogging with Vue', content: '...content...' },
//       { id: 3, title: 'Why Vue is so fun', content: '...content...' }
//     ],
//     postFontSize: 1
//   }
// })
