import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const opts = { ripple: true };

// In a function, we can globally register components;
export default (app) => {
  app.use(PrimeVue, opts);
};
