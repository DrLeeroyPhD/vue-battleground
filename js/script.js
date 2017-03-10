var app = new Vue({
  el: '#app',
  data: {
    opponent: {
      health: 100,
      attacks: {
        confuse: {
          name: 'Confuse',
          damage: 35
        },
        bug: {
          name: 'Bug',
          damage: 25
        }
      },
      level: 40
    },
    player: {
      health: 100,
      attacks: {
        readDocs: {
          name: 'Read Docs',
          damage: 25
        },
        youtube: {
          name: 'YouTube',
          damage: 40
        },
        readBook: {
          name: 'Read Book',
          damage: 30
        },
        google: {
          name: 'Google',
          damage: 35
        }
      },
      level: 42
    }
  }
})