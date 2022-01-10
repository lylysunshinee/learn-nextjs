import * as React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

export interface NavBarMenuProps {}

export default function NavBarMenu(props: NavBarMenuProps) {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/posts" passHref>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href="/joke" passHref>
          <Nav.Link>Joker</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  )
}
