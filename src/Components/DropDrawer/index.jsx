import { Box,Img} from "@chakra-ui/react"
import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import NavList from "../NavList";
const DropDrawer = ({ user,isOpen,onClose,btnRefDrawer }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRefDrawer}>
            <DrawerOverlay />
            <DrawerContent 
                h="100vh"
                bg="#00A5AE"
                borderBottomLeftRadius="25px"
                d="flex"
                flexDir="column"
                justifyContent="space-around"
                alignItems="center">
                <DrawerCloseButton />
                <DrawerHeader>
                    {user === undefined?
                        <Box w="200px" h="200px" borderRadius="50%" bg="grey" d="flex" justifyContent="center" alignItems="center">Adicione uma foto</Box>:
                        <Img src={user.foto} alt={user.name}/>}
                </DrawerHeader>
                <DrawerBody>
<<<<<<< HEAD
                    <NavList onClose={onClose} />
=======
                    <NavList onClose={onClose}/>
>>>>>>> 713adbcbf49c69bcfd7b8f47ab2d3be8b71ba385
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default DropDrawer;
