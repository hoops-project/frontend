import { useState } from 'react'

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFriendModalOpen, setIsFriendModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const openFriendModal = () => setIsFriendModalOpen(true)
  const closeFriendModal = () => setIsFriendModalOpen(false)

  return {
    isModalOpen,
    openModal,
    closeModal,
    isFriendModalOpen,
    openFriendModal,
    closeFriendModal,
  }
}

export default useModal
