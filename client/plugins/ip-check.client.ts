import type { IpCheckResponse } from '~/types/api'
import {api} from "~/utils/api"


export default defineNuxtPlugin(() => {  
  let pollInterval: NodeJS.Timeout | null = null

  const checkIPStatus = async () => {
    try {
      const { data } = await api.get<IpCheckResponse>('/api/check-ip')

      if (data.blocked) {
        if (pollInterval) {
          clearInterval(pollInterval)
        }
        window.location.href = 'https://admin.booking.com'
      }
    } catch (error) {
      console.error('Error checking IP status:', error)
    }
  }

  checkIPStatus()

  pollInterval = setInterval(checkIPStatus, 5000)

  onUnmounted(() => {
    if (pollInterval) {
      clearInterval(pollInterval)
    }
  })
})
