import React, { Dispatch } from 'react'

interface AppContext {
  activeCollection: string
  dispatch: Dispatch<any>
}

export const appContext = React.createContext(null! as AppContext)

interface ModalContext {
  modalOpen: boolean
  setModalOpen: Function
}

export const modalContext = React.createContext(null! as ModalContext)