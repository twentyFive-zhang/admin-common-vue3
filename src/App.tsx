import { defineComponent } from 'vue'
import { Button, Card } from 'ant-design-vue'
import { RouterLink, RouterView } from 'vue-router'
const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView></RouterView>
      </div>
    )
  }
})

export default App
