import React from 'react'

interface HeaderProps {
  Title: string
  Text?: string
  Surtitle?: string
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      Header
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  )
}
