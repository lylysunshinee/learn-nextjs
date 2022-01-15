import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getBooks } from '../../network/books'

interface Book {
  bookName: String
  bookContent: String
}

export interface BooksPageProps {
  books: Array<Book>
}

export async function getStaticProps() {
  const books = await getBooks()
  console.log('books', books)
  return {
    props: {
      books,
    }, // will be passed to the page component as props
  }
}

export default function BooksPage(props: BooksPageProps) {
  const { books } = props
  return (
    <Layout>
      {books.map((book: Book) => (
        <Card key={book.bookName.toString()} className="my-2 shadown">
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/" passHref>
              <Button>Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  )
}
