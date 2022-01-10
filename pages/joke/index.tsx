import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getRandomJoke } from '../../network/joke'

export interface JokePageProps {
  data?: any
}

export async function getServerSideProps(context: any) {
  const data = await getRandomJoke()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function JokePage(props: JokePageProps) {
  const { data } = props
  return (
    <Layout>
      <Card className="my-2 shadown">
        <Card.Body>
          <Card.Title>{'The story funny about chucknorris'}</Card.Title>
          <Card.Text>{data.value}</Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  )
}
