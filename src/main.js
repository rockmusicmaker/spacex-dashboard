import "./main.css";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import { Router } from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient } from "./apollo";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, ApolloClient);
  },
  render: () => h(App),
});
app.use(Router);

app.mount("#app");
