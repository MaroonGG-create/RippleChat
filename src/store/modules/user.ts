import { defineStore } from 'pinia'
import { Local } from "@/utils/catch/index";


interface UserState {
  id?:string,
  userInfo?:string;
  token?: string;
  username: string;
  roles: [],
}
const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      id: '',
      username: '',
      token: undefined,
      roles: []
    } as UserState, // 用户信息
  }),

  actions: {
    SET_USER_INFO(info: any) {
      this.userInfo = info
    },
    LOGOUT() {
      this.userInfo = {
        id: '',
        username: '',
        token: undefined,
        roles: []
      }
      Local.clear()
    }
  }
})

export default useUserStore