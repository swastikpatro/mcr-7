import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { sectionCenterStyles } from '../GlobalStyles';
import { data } from '../data';

const SingleDestinationPage = () => {
  const { continentId, countryId, destinationId } = useParams();

  const continent = data.continents.find(
    ({ id }) => Number(continentId) === id
  );

  const country = continent?.countries?.find(
    ({ id }) => Number(countryId) === id
  );

  const destination = country?.destinations?.find(
    ({ id }) => Number(destinationId) === id
  );

  if (!continent || !country || !destination) {
    return <Box>Location not Found</Box>;
  }

  const { id, name, description, image } = destination;

  return (
    <Box sx={sectionCenterStyles}>
      <Heading textAlign={'center'} mb="2rem">
        {name}
      </Heading>
      <Box display={'grid'} gridTemplateColumns={'300px 1fr'} h="100dvh">
        <Box>
          <Image src={image} alt={name} />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleDestinationPage;
