import { app } from '@storybook/vue3'
import { createI18n } from 'vue-i18n';
import calendarLocales from '../src/components/Calendar/Calendar.i18n'

const i18n = createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': {
      lrUi: {
        ...calendarLocales.en,
      },
    },
    'ru-RU': {
      lrUi: {
        ...calendarLocales.ru,
      },
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FEFEFE',
      },
      {
        name: 'dark',
        value: '#190041',
      },
    ],
  },
}

// app.use(i18n)