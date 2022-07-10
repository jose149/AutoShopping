import { createApp } from 'vue'
import App from './TeleShopping.vue'
import { router } from './TeleShoppingRouter'


const app = createApp(App)
app.use(router)
app.mount('#app')
