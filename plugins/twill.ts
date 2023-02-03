import { Twill } from '@area17/twill-api-client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = {
    url: config.public.twillApi,
    token: config.twillApiSecret,
    prefix: '/api',
    version: 'v1'
  }

  const twill = Twill(api)

  return {
    provide: {
      twill
    }
  }
})
