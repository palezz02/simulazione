import { CardBody, Stack, Heading, Divider, CardFooter,  Card, Image, Text } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom";


const CardFilm = () => {
  const film = useLoaderData() as any ;
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={film.Poster}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{film.Title}</Heading>
            <Text>
              {film.Plot}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {film.Year}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardFilm