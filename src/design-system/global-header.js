import React from 'react';
import { Box, Flex } from './primitives';
import { Text } from './typography';
import { SimpleLink } from './links';
import { Icon } from './icon';

export const GlobalHeader = ({ linkTo = '/' }) => (
  <Flex as="nav" mx="auto" my={6} alignItems={['flex-start', 'center']}>
    <Box display={['block', 'flex']} alignItems="center">
      <SimpleLink
        to={linkTo}
        style={{ textTransform: 'uppercase' }}
        mb={0}
        mr={2}
        color="neutral.1"
        letterSpacing="tracked"
        fontSize={1}
        fontWeight={7}
        lineHeight="solid"
      >
        Varun Vachhar
      </SimpleLink>
      <Text
        color="neutral.3"
        fontSize={1}
        lineHeight="solid"
        mt={[1, 0]}
        mb={0}
      >
        finder of new ways to confuse myself
      </Text>
    </Box>
    <Box flex={1} />
    <Icon type="toggleDarkMode" color="neutral.1" />
  </Flex>
);
