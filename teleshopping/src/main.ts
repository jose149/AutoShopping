import { createApp } from 'vue'
import App from './TeleShopping.vue'
import { teleShoppingRouter } from './router/TeleShoppingRouter'



const app = createApp(App)
app.use(teleShoppingRouter)
app.mount('#app')
