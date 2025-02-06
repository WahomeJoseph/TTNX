import { useState } from "react"
import { Head } from "./components/Head"
import { PostCard } from "./components/PostCard"
const App = () => {
  const [showModal, setShowModal] = useState(true)
  const handleModal = () => {
    setShowModal(false)
  }
  const toggleModal = () => {
    setShowModal(true)
  }


  return (
    <>
    <Head onCreatePost={toggleModal}/>
    <main className="w-full h-screen p-2 bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <PostCard isPosting={showModal} onStopPosting={handleModal}/>
    </main>
    </>
    
  )
}

export default App
