import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getPosts } from '../../network/post'
export interface PostsPage {
  posts?: any
}

export const getStaticProps = async (context: any) => {
  const posts = await getPosts()
  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default function PostsPage(props: PostsPage) {
  const { posts } = props
  return (
    <Layout>
      {posts.map((post: any) => (
        <Card className="my-2 shadow" key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  )
}
