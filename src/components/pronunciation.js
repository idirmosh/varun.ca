import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Icon, TransparentButton } from 'ds';

const StyledIcon = styled(Icon)`
  transition: background-color ${props => props.theme.animations.easeIn};
`;

const PronunciationButton = styled(TransparentButton)`
  :hover ${StyledIcon}, TransparentButton ${StyledIcon}:focus {
    background-color: ${props => props.theme.colors.brand.main};
  }
`;

export const Pronunciation = () => {
  const nameAudio = useNameAudio();

  return (
    <Box as="span">
      Varun Vachhar
      <PronunciationButton
        fontSize="inherit"
        fontWeight="inherit"
        aria-label="pronunciation"
        ml={1}
        onClick={() => nameAudio.play()}
      >
        <StyledIcon
          role="img"
          type="speaker"
          borderRadius="circle"
          color="neutral.6"
          bg="neutral.3"
          fontSize={2}
          p="2px"
          width="10px"
          height="10px"
        />
      </PronunciationButton>
    </Box>
  );
};

function useNameAudio() {
  const [nameAudio, setNameAudio] = useState(null);

  useEffect(() => {
    setNameAudio(
      new Audio('https://www.nameshouts.com/libs/media/varun_hi.mp3')
    );
  }, []);

  return nameAudio;
}
