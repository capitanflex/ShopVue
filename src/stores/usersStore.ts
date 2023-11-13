import {ref, computed, watch} from 'vue'
import { defineStore } from 'pinia'

export const useUserStore
    = defineStore('userStore', () => {
    const userAuth = ref(false);
    const usersTokens = ref([]);
    const usersOnLocalStorage = localStorage.getItem("users")

    if (usersOnLocalStorage){
        usersTokens.value = JSON.parse(usersOnLocalStorage.value)
    }

     const addUserToken = (token : string) => {
        if (!usersTokens.value.includes(token)) {
            usersTokens.value.push(token)
        }
    }

    const deleteUserToken = (token : string) => {
        usersTokens.value.pop(token)
    }

    const checkUserAuth = computed(() => {
        if (usersTokens.value.length > 0){
            return true;
        }
        return false;
    })

    watch(() => usersTokens, (state) => {
        localStorage.setItem('users', JSON.stringify(state))
        console.log(JSON.stringify(state))
    })

    return { userAuth, usersTokens, usersOnLocalStorage,  addUserToken, deleteUserToken, checkUserAuth}
})
