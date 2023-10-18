import { ref, type Ref } from 'vue'

declare global {
    interface Window {
        VK: any
        isVKInit: Ref<boolean>
    }
}

export default {
    install: (app: any, options: any) => {
        new Promise((resolve) => {
            window.isVKInit = ref(false)
            let script = document.createElement('script')
            script.src = 'https://vk.com/js/api/openapi.js?169'
            script.onload = () => {
                setTimeout(() => {
                    resolve(true)
                    window.isVKInit.value = true
                }, 500)
            }
            document.getElementsByTagName('head')[0].appendChild(script)
        }).then(() => {
            window.VK.init(options)
        })
    }
}

export function login(successCallback: CallableFunction, errorCallback: CallableFunction) {
    if (!window.isVKInit.value) return false

    window.VK.Auth.login((response: any) => {
        if (response.session) {
            successCallback(response)
        } else {
            errorCallback(response)
        }
    })
}
