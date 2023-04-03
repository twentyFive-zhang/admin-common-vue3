import { defineComponent, reactive } from 'vue'
import { Button, Form, Input, Layout, Tabs } from 'ant-design-vue'
import type { LoginReqVO } from '@/api/@types'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { loginUsingPOST } from '@/api/sys/user'

const Login = defineComponent({
  setup() {
    const formState = reactive<LoginReqVO>({ username: '', password: '', type: '1' })
    const triggerToLogin = async () => {
      try {
        await loginUsingPOST(formState)
      } catch (e) {
        console.log(e)
      }
    }
    return () => (
      <div {...{ style: { minHeight: '100vh' } }}>
        {/* <Layout.Header {...{ theme: 'light' }}></Layout.Header> */}
        <Layout.Content>
          <Tabs {...{ centered: true, size: 'large', style: { width: '340px', margin: '0 auto' } }}>
            <Tabs.TabPane {...{ tab: '账号密码登录' }}>
              <Form>
                <Form.Item {...{ label: '', name: 'username' }}>
                  <Input
                    v-model:value={formState.username}
                    {...{
                      placeholder: '请输入用户名',
                      size: 'large',
                      prefix: <UserOutlined></UserOutlined>
                    }}
                  >
                    {{
                      prefix: () => <UserOutlined></UserOutlined>
                    }}
                  </Input>
                </Form.Item>
                <Form.Item {...{ label: '', name: 'password' }}>
                  <Input.Password
                    v-model:value={formState.password}
                    {...{ placeholder: '请输入密码', size: 'large' }}
                  >
                    {{
                      prefix: () => <LockOutlined></LockOutlined>
                    }}
                  </Input.Password>
                </Form.Item>
                <Form.Item>
                  <Button
                    {...{ block: true, type: 'primary', size: 'large', onClick: triggerToLogin }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </Layout.Content>
      </div>
    )
  }
})

export default Login
