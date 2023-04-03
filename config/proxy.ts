export default {
  dev: {
    '/api': {
      target: 'http://192.168.28.126:8080',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
}
