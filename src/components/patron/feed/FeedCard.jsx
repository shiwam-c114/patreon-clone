import React from "react";
import { Button, Divider, Heading, Image, Input } from "@chakra-ui/react";
import { Comments } from "./Comments";
import "./feed.css"
export const FeedCard = () => {
  return (
    <div className="feedCard">
      <div >
        <div style={{display:"flex", paddingBottom:"15px", alignItem:"centre"}}>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Heading paddingLeft="15px" as="h5" size="sm">
            NAME of Creator
          </Heading>
        </div>
        <div >
          <img className="postImage" src="https://bit.ly/dan-abramov" alt="" />
        </div>
        <div>
          <Heading paddingBottom="10px" color={"grey"} as="h6" size="xs">
            DATE
          </Heading>
        </div>
        <div>
          <Heading paddingBottom="10px" as="h5" size="sm">
            Title
          </Heading>
        </div>
        <div>
          <p style={{paddingBottom:"10px"}}>Description</p>
        </div>
        <div>
          <p style={{paddingBottom:"10px"}}>Check out <a href="">upload content</a> for a surprise</p>
        </div>
        <div style={{paddingBottom:"10px"}}>
          <div>like button, share button, report </div>
          <div>number likes </div>
        </div>
        <Divider/>
        <div style={{color:"grey", paddingBottom:"10px", display:"flex", justifyContent:"space-between"}}>
          <button>Load more comments</button> <p>2 of number</p>
        </div>
        <div>
        <Comments style={{paddingBottom:"10px"}} />
        </div>
        <div style={{display:"flex"}}>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Input marginLeft="15px" placeholder='Join the conversation...' size='lg' />          
        </div>
      </div>
    </div>
  );
};
