import { GetStaticProps } from "next"

import { Title } from "../styles/index.styles"
import Layout from "../components/Layout.component"
import CatsCard from "../components/CatsCard.component"

import { Breed, ICat } from "../types"

export default function Home({ cats }: ICat) {
  return (
    <Layout title="Full of Cats">
      <Title>Full <i className="fab fa-yarn"></i>f Cats</Title>
      <CatsCard cats={cats} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds")
    const results: Breed[] = await response.json()
    const breeds = await Promise.all(
      results.map(async ({ id }) => {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
        const breeds = await res.json()
        return breeds
      })
    )
    const cats = breeds.flat(1)

    return {
      props: { cats }
    }
  } catch (error) {
    throw error
  }
}