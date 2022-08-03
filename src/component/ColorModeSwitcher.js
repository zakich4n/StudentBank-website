import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  

  return (
    <IconButton
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      marginLeft="2"
      color='black'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      size='md'
      {...props}
    />
  );
};

export default ColorModeSwitcher;