import { Button } from '@chakra-ui/react'
import React from 'react'
import { Membershipcard } from './Membershipcard'

export const MembershipPage = () => {
    const [tiers, setTiers]=React.useState([])

    const tier3={
        name: "MARS NEWS",
    monthlyPrice: "1",
    tierdescription: "this is free tier description",
    cover_image: "https://picsum.photos/id/23/200/300",
    benefits: "Join us for a monthly livestream, which will occur just before or after we record Dear Hank and John! We're charging the lowest amount we can for this because we want as much of the community to be able to get involved as possible."
    }
    const tier1={
      name: "AFC WIMBLEDON NEWS",
  monthlyPrice: "5",
  tierdescription: "this is free tier description",
  cover_image: "https://picsum.photos/id/23/200/300",
  benefits: "Also, cast your vote for AFC Wimbledon in the never-ending (except in death) battle regarding which news is more interesting to you. If you're in this perk, then you clearly like AFC Wimbledon most."
  }
  const tier2={
    name: "Free",
monthlyPrice: "0",
tierdescription: "this is free tier description",
cover_image: "https://picsum.photos/id/23/200/300",
benefits: "Not ad-free Content"
}
    React.useEffect(()=>{
      fetch(`https://patreon-data.herokuapp.com/users/1`)
      .then(res=>res.json())
      .then(data=>setTiers(data.creator_mode.tiers))
      .catch(err=>console.log(err))              
    },[])

    // const tiers=[tier1, tier2, tier3]
  return (
    <>
    <div >
      <div style={{display:"flex", justifyContent:"space-evenly", gap:"20px"}}>
      {
       tiers?.map(ele=><Membershipcard tier={ele}/>) 
      }
        
    </div>
    </div>
    <div style={{display: "grid", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop:"30px"}}>
    <Button colorScheme='teal' size='lg'>
    See all levels
  </Button>
    </div>  

    </>
  )
}



