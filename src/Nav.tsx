import React from "react";
import logo from './assets/logo.svg'
import cart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'

import { Avatar, Link, Stack, Image } from "@chakra-ui/react"
interface Props { }

const Nav: React.VFC<Props> = (props) => {

    return (
        <Stack paddingY={8} direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={12} alignItems="center">
                <Image src={logo} />
                <Stack spacing={6} direction="row" color="gray.500" fontSize="sm">
                    <Link>Collections</Link>
                    <Link>Man</Link>
                    <Link>Woman</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={6} alignItems="center">
                <Image src={cart} height={6} width={6}></Image>
                <Avatar src={avatar} height={10} width={10}></Avatar>
            </Stack>
        </Stack>
    )
}

export default Nav