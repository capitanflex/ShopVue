import {ref, watch, watchEffect} from 'vue'
import { defineStore } from 'pinia'
import type {IUser} from "@/router/interfaces";
import {useRouter} from "vue-router";

export const useUserStore
    = defineStore('userStore', () => {
    const userAuth = ref(false);
    const usersTokens = ref([]);
    const usersOnLocalStorage = localStorage.getItem("users")
    const routerUse = useRouter();
    console.log(usersOnLocalStorage)
    if (usersOnLocalStorage){
        usersTokens.value.push(usersOnLocalStorage)
        console.log(usersTokens.value)
    }


    const registerUser = (token : IUser) => {
        addUserToken(token);
        checkUserAuth();
        authoriseUser(token);
        console.log(userAuth.value)
    }

    const authoriseUser = (token : IUser) => {
        // usersTokens.value.forEach((element : IUser) =>{
        //     console.log(element.login)
        //     if (element.login === token.login && element.password === token.password){
        //         userAuth.value = true;
        //         routerUse.push('/')
        //     }
        // })
        userAuth.value = true;
    }
    const unAuthoriseUser = () => {
        userAuth.value = false;
        // localStorage.clear();
        console.log(userAuth.value)
    }
     const addUserToken = (token : IUser) => {
        usersTokens.value.push(token)
        localStorage.setItem("users", JSON.stringify(token))
    }

    const deleteUserToken = (token : IUser) => {
        usersTokens.value.pop(token)
    }

    const checkUserAuth = () => {
        console.log(usersOnLocalStorage)
        if (usersOnLocalStorage != null && usersOnLocalStorage.length > 0){
            authoriseUser();
            console.log(usersOnLocalStorage)
        }

    }




    return { userAuth, registerUser,authoriseUser, unAuthoriseUser, usersTokens, usersOnLocalStorage,  addUserToken, deleteUserToken, checkUserAuth}
})
