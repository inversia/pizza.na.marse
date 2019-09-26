import { createContext, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'

const LayoutModeContext = createContext ()

function useLayoutContext () {
    
    const appEl      = useRef ()
    const { width }  = useComponentSize (appEl)
    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    return {isMobile, layoutMode}
}

export { LayoutModeContext, useLayoutContext}