import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './routes/Home'
import { Layout } from './routes/Layout'
import { About } from './routes/About'
import { Contact } from './routes/Contact'
import { BrowserRouter } from 'react-router-dom'
import { NotFound } from './routes/NotFound'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { useEffect } from 'react'

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
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Root
