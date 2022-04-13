import style from '../styles/beta.module.scss'
import React, { Dispatch, Reducer, useReducer } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import CollectionsSection from '../components/CollectionsSection'
import NotepageSection from '../components/NotepageSection'

interface AppContext {
  activeCollection: string,
  dispatch: Dispatch<any>
}

export const appContext = React.createContext(null! as AppContext)

const NotePage: NextPage = () => {
  function resizeApp() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  
  const reducer = (state: {}, {type, value}: {type: string, value: string}) => {
    if(type === 'loadCollection') {
      return {...state, activeCollection: value}
    }
  }

  const initialState = {
    activeCollection: undefined
  }

  const [state, dispatch] = useReducer<Reducer<any, any>>(reducer, initialState)

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <appContext.Provider value={{...state, dispatch}}>
        <div className={style.wrapper}>
          <CollectionsSection />
          <NotepageSection />
        </div>
      </appContext.Provider>
    </div>
  )
}

export default NotePage