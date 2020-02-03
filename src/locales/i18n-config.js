import i18n from 'i18next'

import locales from '.'

function getResources() {
  const resources = {}

  Object.keys(locales).forEach(id => {
    resources[id] = {
      translation: locales[id]
    }
  })

  return resources
}

i18n.init({
  resources: getResources(),
  fallbackLng: 'en',
  lng: 'en',
  load: 'languageOnly'
})

export default i18n
