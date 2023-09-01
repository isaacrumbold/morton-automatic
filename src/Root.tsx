import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { Layout } from './routes/Layout'
import { About } from './routes/About'
import { Contact } from './routes/Contact'

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    )
}

export default Root
