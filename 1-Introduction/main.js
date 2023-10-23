const main = Vue.createApp({
  // ! - uncomment this to preview how it work
  // template: `
  //   <h1 align="center"> Let's VUE !</h1>
  //   <p align="center">Hello, World, Lets learn vue js</p>
  // `,

  data() {
    return {
      name: "EL AZZOUZI HASSAN",
      nickname: "Wizardy",
      str: ''
    }
  },
  methods: {
    changeName(name) {
      // this.name = "Its just Hassan :)"
      this.name = name;
    }
  }
})

main.mount('.app')