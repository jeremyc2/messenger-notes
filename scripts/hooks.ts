import { RefObject, useEffect } from 'react'

/**
 * Hook for clicking or scrolling outside an element
 */
export function useOutsideTrigger(ref: RefObject<HTMLElement>, cb: Function) {
  const events = ['click', 'scroll']
  useEffect(() => {
    function handleOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb()
        event.stopPropagation()
      }
    }
    // Bind the event listener
    events.forEach(event => {
      document.addEventListener(event, handleOutside, true)
    })
    return () => {
      // Unbind the event listener on clean up
      events.forEach(event => {
        document.addEventListener(event, handleOutside, true)
      })
    }
  }, [ref])
}

export function useCSSProp({property, value}: {property: string, value: string}, dependencies?: any[]) {
  useEffect(() => {
    document.documentElement.style.setProperty(property, value)
  }, dependencies)
}