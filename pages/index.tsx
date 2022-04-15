import style from '../styles/beta.module.scss'
import React, { Reducer, useReducer } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import CollectionsSection from '../components/CollectionsSection'
import NotepageSection from '../components/NotepageSection'
import { appContext } from '../contexts'

const NotePage: NextPage = () => {
  
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