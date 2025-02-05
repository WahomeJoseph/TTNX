import { useState } from "react"
import { Head } from "./components/Head"
import { PostCard } from "./components/PostCard"
const App = () => {
  const [showModal, setShowModal] = useState(true)
  const toggleModal = () => {
    setShowModal(false)
  }
  const handleModal = () => {
    setShowModal(false)
  }


  return (
    <>
    <Head onCreatePost={handleModal}/>
    <main className="w-full h-screen p-2 bg-gradient-to-r from-[#0f172a]  to-[#334155]">
      <PostCard isPosting={showModal} onStopPosting={toggleModal}/>
    </main>
    </>
    
  )
}

export default App
