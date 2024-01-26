import { Card, CardBody, Divider, Grid, GridItem, Heading, Stack, Text, Image } from '@chakra-ui/react'
import { Link, useLoaderData } from "react-router-dom";
import { Films } from '../api/apiCall';

const Movies = () => {
    const films = useLoaderData() as Films[];
    return (
        <Grid templateColumns='repeat(5, 2fr)' gap={6}>
            {films.map((film: Films, key) => (
                <Link to={`/${film.imdbID}`}>
                    <GridItem key={key}>
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
                                    {film.Title}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {film.Year}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                </GridItem>
                </Link>
            ))}
        </Grid>
    )
}

export default Movies