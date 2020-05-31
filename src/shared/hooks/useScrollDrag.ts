import React, { useRef, useState } from 'react'

export default function useScrollDrag() {
  const ref = useRef<HTMLDivElement>(null!)
  const [initMouseX, setinitMouseX] = useState(0)
  const [initScrollX, setInitScrollX] = useState(0)

  const events = {
    ref,
    onMouseDown: ({ nativeEvent: e }: React.MouseEvent) => {
      setinitMouseX(e.clientX)
      setInitScrollX(ref?.current?.scrollLeft)
    },
    onMouseMove: ({ nativeEvent: e }: React.MouseEvent) => {
      if (e.buttons > 0) {
        e.preventDefault()
        ref.current?.scrollTo({
          left: initScrollX + initMouseX - e.clientX,
          behavior: 'smooth',
        })
      }
    },
  }

  return [events, ref]
}
