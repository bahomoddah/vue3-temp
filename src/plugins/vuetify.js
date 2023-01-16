import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { ar } from 'vuetify/locale';

export default createVuetify({
  locale: {
    locale: 'ar',
    fallback: 'ar',
    messages: { ar },
  },
  theme: {
    defaultTheme: 'light',
  },
});

export { components, directives };
