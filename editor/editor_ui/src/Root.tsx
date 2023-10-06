import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { NotFound } from './routes/NotFound'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { useEffect } from 'react'
import { Portfolio } from './routes/Portfolio'
import { Editor } from './routes/Editor'
import projects from '../../projects.json'

export const links = [{ to: '/', name: 'Editor', id: 1 }]

projects.length !== 0 &&
    links.push({ to: '/portfolio', name: 'portfolio', id: 2 })

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
                <Route index element={<Editor />} />
                {projects.length !== 0 && (
                    <Route path="/portfolio" element={<Portfolio />} />
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Root
