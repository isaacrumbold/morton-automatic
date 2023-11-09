import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { NotFound } from './routes/NotFound'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import { Portfolio } from './routes/Portfolio'
import { Editor } from './routes/Editor'
import jsonUrl from '/json/projects.json?url'
import { getJson } from './routes/Editor'

getJson(jsonUrl)

export const links = [{ to: '/', name: 'Editor', id: 1 }]

function Root() {
    const [projects, setProjects] = useState([])

    projects.length !== 0 &&
        links.length === 1 &&
        links.push({ to: '/portfolio', name: 'portfolio', id: 2 })
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
        getJson(jsonUrl).then((res) => setProjects(res))
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
