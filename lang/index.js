import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en-EN'; // preload default language

Vue.use(VueI18n)

const messages = {
  'en-EN': en // default language
}

const i18n = new VueI18n({
  locale: 'en-EN', // actual language
  fallbackLocale: 'en-EN',
  silentTranslationWarn: true,
  messages, // set locale messages
})

export default i18n