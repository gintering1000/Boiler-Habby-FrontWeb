import App from './app.svelte';
import "../node_modules/svelte-material-ui/bare.css";
import "./js/default.js";
import "./css/default.css";
import "./css/font.css";

const app = new App({
  target: document.body,
});

export default app;
