import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { NotFound } from './routes/NotFound'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { useEffect } from 'react'
import { Portfolio } from './routes/Portfolio'
import { Editor } from './routes/Editor'

export const links = [
    { to: '/', name: 'Portfolio', id: 1 },
    { to: '/editor', name: 'Editor', id: 2 },
]

function Root() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Portfolio />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Root
