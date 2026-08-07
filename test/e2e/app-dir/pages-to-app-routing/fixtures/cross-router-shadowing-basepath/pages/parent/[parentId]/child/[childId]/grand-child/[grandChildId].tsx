import type { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

type Props = {
  childId: string
  grandChildId: string
  parentId: string
}

export default function GrandChild({ childId, grandChildId, parentId }: Props) {
  return (
    <>
      <h1 id="page-title">
        Pages Grandchild: {grandChildId} ({childId}, {parentId})
      </h1>
      <Link id="to-child-link" href={`/parent/${parentId}/child/${childId}`}>
        To Pages Child
      </Link>
    </>
  )
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  return {
    props: {
      childId: params?.childId,
      grandChildId: params?.grandChildId,
      parentId: params?.parentId,
    },
  }
}
