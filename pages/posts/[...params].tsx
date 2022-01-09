import { useRouter } from 'next/router'
import React from 'react'

export interface ParamslPageProps {}

export default function ParamslPage(props: ParamslPageProps) {
  const router = useRouter()
  return (
    <div>
      <h1>Params Page</h1>
      <p> Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
