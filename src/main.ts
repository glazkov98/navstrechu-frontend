import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import vkauth from './plugins/vkauth'
import cloudpayments from './plugins/cloudpayments'
import { disableZoom } from './disable-zoom'
import { checkIos } from './check-ios'

disableZoom()
checkIos()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vkauth, { apiId: 51755560 })
app.use(cloudpayments, { publicId: 'test_api_00000000000000000000002' })

app.mount('#app')
