import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const BlankLayout = defineComponent({
  setup() {
    return () => (
      <>
        <RouterView></RouterView>
      </>
    )
  }
})
export default BlankLayout
