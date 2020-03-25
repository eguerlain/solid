import React from 'react'
import Modal from 'react-modal'

interface Props {
    isOpen: boolean,
    closeModal: () => void
}

export const WarningModal = ({ isOpen, closeModal }: Props) => {
    return <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={'Codiv-19'}
    >
        <p>Restez chez vous</p>
    </Modal>
}