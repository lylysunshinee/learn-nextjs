import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getPostByIds } from '../../network/post'

export interface PostDetailPageProps {
  post?: any
}

export const getServerSideProps = async (context: any) => {
  const { postId } = context.query
  const post = await getPostByIds(postId)
  return {
    props: { post }, // will be passed to the page component as props
  }
}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter()
  const data = props.post
  return (
    <Layout>
      <Card className="my-2 shadow">
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.body}</Card.Text>
          <Button onClick={() => router.back()} variant="dark">
            Back
          </Button>
        </Card.Body>
      </Card>
    </Layout>
  )
}
