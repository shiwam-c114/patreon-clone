import React from 'react'
import {Landingtop} from "../../components/Landingtop"
import { Landingsearchbar } from '../../components/Landingsearchbar'
import {Landingcommcard1} from '../../components/Landingcommcard'
import {Landingmid} from "../../components/Landingmid";
import { Landingbottom } from '../../components/Landingbottom';
import { Landingwhouses } from '../../components/Landingwhouses';
function Home() {
  return (
    <div>
      <Landingtop />
      <Landingsearchbar />
      <Landingcommcard1 />
      <Landingmid />
      <Landingwhouses />
      <Landingbottom/>
    </div>
  )
}

export default Home