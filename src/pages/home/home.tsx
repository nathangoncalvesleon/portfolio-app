import React from 'react'
import { Container } from '../../components/container/container'
import { Header } from '../../components/header/header'
import { Sidebar } from '../../components/sidebar/sidebar'

export default function Home() {
  return (
    <>
      <header><Header /></header>

      <div className='flex flex-1 flex-row '
      >
        <aside className=''>
          <Sidebar />
        </aside>
        <main className=''>
          <Container />
        </main>
      </div>
    </>
  )
}
