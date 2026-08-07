import type { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

type Props = {
  childId: string
  parentId: string
}

export default function Child({ childId, parentId }: Props) {
  return (
    <>
      <h1 id="page-title">
        Pages Child: {childId} ({parentId})
      </h1>
      <Link
        id="to-grand-child-link"
        href={`/parent/${parentId}/child/${childId}/grand-child/grand-1`}
      >
        To Pages Grandchild
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
      parentId: params?.parentId,
    },
  }
}
