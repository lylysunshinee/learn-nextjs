import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import NavBarMenu from './NavBarMenu'

export interface LayoutProps {
  children?: any
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <Container>
      <Head>
        <title>Learn NextJS | DongNguyen</title>
        <meta name="description" content="Lean NextJS + Typescript with fun :D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBarMenu />
      </header>

      <main>{children}</main>
    </Container>
  )
}
