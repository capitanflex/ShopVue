import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from "@/router/interfaces";
import { useRouter } from "vue-router";

export const useUserStore
    = defineStore('userStore', () => {
    const userAuth = ref(false);
    const usersTokens = ref([]);
    const usersOnLocalStorage = JSON.parse(localStorage.getItem("users")) || [];
    const routerUse = useRouter();
    if (usersOnLocalStorage){
        usersTokens.value.push(usersOnLocalStorage)
    }


    const registerUser = (token : IUser) => {
        addUserToken(token);
        authoriseUser(token);
    }

    const authoriseUser = (token : IUser) => {
        usersTokens.value.forEach((element : IUser) =>{

            if (element.login === token.login && element.password === token.password){
                userAuth.value = true;
                routerUse.push('/')
            }
        })
    }
    const unAuthoriseUser = () => {
        userAuth.value = false;
        // localStorage.clear()
    }
     const addUserToken = (token : IUser) => {
        usersTokens.value.push(token)
        localStorage.setItem("users", JSON.stringify(token))
    }

    const deleteUserToken = (token : IUser) => {
        const index = usersTokens.value.findIndex((element : IUser) =>
            element.login === token.login && element.password === token.password);
        if (index !== -1) {
            usersTokens.value.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(usersTokens.value));
        }
    }

    const checkUserAuth = () => {
        if (usersTokens.value.length > 0) {
            userAuth.value = true;
        }
    }

    const checkUser = (token: IUser) => {
        return usersTokens.value.some((element: IUser) => {
            return element.login === token.login && element.password === token.password;
        });
    };


    checkUserAuth();

    return { userAuth, registerUser,authoriseUser, unAuthoriseUser, usersTokens, usersOnLocalStorage,  addUserToken, deleteUserToken, checkUser}
})
