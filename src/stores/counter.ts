import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { ILogin } from '@/apis/auth'

export const useAuth = defineStore('auth', () => {
  const auth = ref<ILogin | undefined>()
  function setAuth(data: ILogin) {
    auth.value = data
  }
  return { auth, setAuth }
})
