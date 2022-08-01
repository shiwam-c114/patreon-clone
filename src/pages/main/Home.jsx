import React from 'react'
import {Landingtop} from "../../components/Landingtop"
import { Landingsearchbar } from '../../components/Landingsearchbar'
import {Landingcommcard1} from '../../components/Landingcommcard'
import {Landingmid} from "../../components/Landingmid"
function Home() {
  return (
    <div>
      <Landingtop />
      <Landingsearchbar />
      <Landingcommcard1 />
      <Landingmid />
    </div>
  )
}

export default Home