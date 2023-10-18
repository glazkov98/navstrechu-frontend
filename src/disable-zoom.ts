export function disableZoom() {
    document.addEventListener(
        'mousewheel',
        (e: any) => {
            if (!e.ctrlKey && !e.metaKey) return

            e.preventDefault()
            e.stopImmediatePropagation()
        },
        { passive: false }
    )

    document.addEventListener(
        'gesturestart',
        (e: any) => {
            e.preventDefault()
            e.stopImmediatePropagation()
        },
        { passive: false }
    )

    document.addEventListener(
        'dblclick',
        (e: any) => {
            e.preventDefault()
            e.stopImmediatePropagation()
        },
        { passive: false }
    )

    document.addEventListener(
        'keydown',
        (e: any) => {
            if (!e.ctrlKey && !e.metaKey) return
            if (e.code != 'NumpadAdd' && e.code != 'Minus') return

            e.preventDefault()
            e.stopImmediatePropagation()
        },
        { passive: false }
    )
}
