const { createApp } = Vue;

createApp({
  data() {
    return {
      firstPassword: "",
      secondPassword: "",

      showPassword: true,
      inputType: "password",
      buttonText: "Show Password",

      passwordLength: 5,
    };
  },
  methods: {
    setInput(dataPropertyName, event) {
      this[dataPropertyName] = event.target.value;
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        this.inputType = "text";
        this.buttonText = "Hide Password";
      } else {
        this.inputType = "password";
        this.buttonText = "Show Password";
      }
    },
  },
  computed: {
    buttonText() {
      if (this.inputType === "password") {
        return "Show Password";
      } else {
        return "Hide password";
      }
    },

    isEqual() {
      return this.firstPassword === this.secondPassword;
    },
    hasLowerCase() {
      let containsLowerCase = false;
      for (i = 0; i < this.firstPassword.length; i++) {
        let currentLetter = this.firstPassword[i];
        if (currentLetter === currentLetter.toLowerCase()) {
          containsLowerCase = true;
          break;
        }
      }
      return containsLowerCase;
    },

    hasUpperCase() {
      let containsUpperCase = false;
      for (i = 0; i < this.firstPassword.length; i++) {
        let currentLetter = this.firstPassword[i];
        if (currentLetter === currentLetter.toUpperCase()) {
          containsUpperCase = true;
          break;
        }
      }
      return containsUpperCase;
    },

    hasNumber() {
      return /\d/.test(this.firstPassword);
    },

    isLongEnough() {
      return this.firstPassword.length >= this.passwordLength;
    },
  },
}).mount("#app");
