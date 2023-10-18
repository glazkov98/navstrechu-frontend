import UAParser from 'ua-parser-js'

export function checkIos() {
    window.addEventListener('DOMContentLoaded', () => {
        if (!window.matchMedia('(display-mode: standalone)').matches) return false

        const parser = new UAParser()
        const os = parser.getOS()
        
        if (os.name !== 'iOS') return false

        document.body.classList.add('platform-ios')
    })
}