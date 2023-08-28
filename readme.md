# Kata: Password Check with VueJS

Please refactor your password check app from the web apps foundation checkpoint to a VueJS app.

## Tasks

- [ ] Use your existing password check app as a starting point (you can copy the sources once you start working on the checkpoint branch)
- [x] Add the Vue 3 Package via [CDN](https://v3.vuejs.org/guide/installation.html#cdn)
- [x] Create a VueJS application instance
- [x] Mount the application to a `#app` container
- [ ] Create the necessary state properties in the `data()` area
- [ ] Create the necessary computed properties in the `computed()` area
- [ ] Create a Vue template that uses all the properties

## Hints

### Video of final solution

https://user-images.githubusercontent.com/16404104/136382623-2a963825-f5db-49ac-9368-0cbce56e66cb.mov

### Vue 3 CDN Package

```html
<script src="https://unpkg.com/vue@next"></script>
```

### Basic skeleton for a VueJS app

```js
    <script>
      const app = Vue.createApp({
        data() {
          return {
            password1: "",
            password2: "",
            // ...
          };
        },
        computed: {
            // ...
        },
      }).mount("#app");
    </script>
```

### Other plain implementaions

If you need another version as base take a look at these versions

- https://github.com/coding-bootcamps-eu/password-check-kata
- https://github.com/coding-bootcamps-eu/password-check

https://github.com/coding-bootcamps-eu/web-apps-with-vuejs/blob/main/katas/001-password-checker-vuejs-cdn-app.md
