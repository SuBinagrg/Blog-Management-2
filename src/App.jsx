

import ProtectedRoute from './components/ProtectedRoute'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SingleBlogPage from './pages/SingleBlogPage'
import MyBlog from './pages/MyBlog'
import EditBlog from './pages/EditBlog'
import UserProfile from './pages/UserProfile'

function App() {

  return (
  <main>
    <Router>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute> 
        } />
        <Route path='/singleblogs/:id' element={
          <ProtectedRoute>
           <SingleBlogPage />
          </ProtectedRoute> 
        } />

<Route path='/myblog' element={
          <ProtectedRoute>
           <MyBlog />
          </ProtectedRoute> 
        } />

<Route path='/editBlogs/:id' element={
          <ProtectedRoute>
           <EditBlog />
          </ProtectedRoute> 
        } />


         <Route path="create-blog" element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
         } />
        
        <Route path="user-profile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
         } />
        
        <Route path='/signup' element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </main>
  )
}

export default App