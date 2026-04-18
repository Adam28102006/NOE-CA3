'use client'

import { useState, useEffect } from 'react'

export default function AccessibilityToggle() {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }, [highContrast])

  return (
    <button onClick={() => setHighContrast(!highContrast)}>
      {highContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
    </button>
  )
}
