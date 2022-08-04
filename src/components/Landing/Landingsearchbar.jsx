import React from "react";
import { Input } from '@chakra-ui/react';
import { Stack, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
export const Landingsearchbar = () => {
    return (
        <div style={{marginTop:"3%"}}>
            <div style={{ width: "70%", margin: "auto", textAlign: "center"}}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "black" }}>Search the 200,000+ creators on Patreon</h1>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",marginTop:"4%", marginBottom:"8%"}}>
                    <Stack spacing={4} style={{ width: "75%" , padding:"2%"}}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input type='tel' placeholder='Search For Patreons' style={{ borderRadius: "25px", backgroundColor: "rgb(245, 244, 242)" }} focusBorderColor='none'/>
                        </InputGroup>
                    </Stack>
                    <Button style={{ borderRadius: "25px", backgroundColor: "rgb(255, 66, 77)", color: "white", marginLeft: "2%" }}>Get Started</Button>
                </div>
            </div>
            <div style={{ width: "52%", margin: "auto", textAlign: "center"}}>
            <h1 style={{ fontSize: "42px", fontWeight: "700", color: "black" }}>What's? Patreon</h1>
            <div style={{ fontSize: "20px", marginTop:"5%"}}>On Patreon, you can let your fans become active participants in the work they love by offering them a monthly membership. You give them access to exclusive content, community, and insight into your creative process. In exchange, you get the freedom to do your best work, and the stability you need to build an independent creative career.</div>
            </div>
        </div>
    )
} 