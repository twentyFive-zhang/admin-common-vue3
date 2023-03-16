import { defineComponent } from 'vue'
import { Button, Card } from 'ant-design-vue'
const AboutView = defineComponent({
  setup() {
    return () => (
      <div>
        <Button>123</Button>
        <Card>123</Card>
      </div>
    )
  }
})

export default AboutView
