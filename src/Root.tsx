import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Layout } from './routes/Layout'
import { About } from './routes/About'
import { Contact } from './routes/Contact'
import { BrowserRouter } from 'react-router-dom'

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root
