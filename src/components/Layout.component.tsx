import Head from "next/head"

import { LayoutContainer } from "./Layout.styles"

import { LayoutProps } from "../types"

export default function Layout({ title, children }: LayoutProps) {
    return (
        <LayoutContainer>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
            </Head>
            <main>
                {children}
            </main>
        </LayoutContainer>
    )
}