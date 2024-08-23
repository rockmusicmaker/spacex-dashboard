import "./main.css";
import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient } from "./apollo";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, ApolloClient);
  },
  render: () => h(App),
});
app.use(router);

app.mount("#app");
