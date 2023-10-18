import { ref, type Ref } from 'vue'

declare global {
    interface Window {
        cp: any
        cpWidget: any
        isCPInit: Ref<boolean>
        CPConfig: any
    }
}

export default {
    install: (app: any, options: any) => {
        new Promise((resolve) => {
            window.isCPInit = ref(false)
            window.CPConfig = options
            let script = document.createElement('script')
            script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments.js'
            script.onload = () => {
                setTimeout(() => {
                    resolve(true)
                    window.isCPInit.value = true
                }, 500)
            }
            document.getElementsByTagName('head')[0].appendChild(script)
        }).then(() => {
            window.cpWidget = new window.cp.CloudPayments()
        })
    }
}

export function pay(
    config: any,
    successCallback: CallableFunction,
    errorCallback: CallableFunction
) {
    if (!window.isCPInit.value) return false

    window.cpWidget.charge({ ...window.CPConfig, ...config }, successCallback, errorCallback)
}
