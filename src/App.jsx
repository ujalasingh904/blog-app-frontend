import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom'
import Homepage from "./routes/Homepage"
import PostListPage from "./routes/PostListPage"
import SinglePostPage from "./routes/SinglePostPage"
import Write from "./routes/Write"
import LoginPage from "./routes/LoginPage"
import Register from "./routes/RegisterPage"

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl-px-64'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/posts' element={<PostListPage />} />
        <Route path='/:slug' element={<SinglePostPage />} />
        <Route path='/write' element={<Write />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  )
}

export default App