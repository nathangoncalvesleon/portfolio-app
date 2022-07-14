import React from 'react'
import { Container } from '../../components/container/container'
import { Header } from '../../components/header/header'
import { Sidebar } from '../../components/sidebar/sidebar'

export default function Home() {
  return (
    <>
      <div className="w-screen flex-col md:flex md:flex-row ">
        <aside>
          <Sidebar />
        </aside>
        <main className="w-screen ">
          <Container />
        </main>
      </div>
    </>
  )
}
