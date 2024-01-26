import { Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Flex alignItems='center' gap='20' bg='tomato' width='100%'>
            <Link to={'/home'}>
                <Image
                    boxSize='80px'
                    src='../../public/logo.png'
                    alt='Logo'
                />
            </Link>
            <Heading size='lg' fontSize='50px'>
                Header
            </Heading>
        </Flex>
    )
}

export default Header