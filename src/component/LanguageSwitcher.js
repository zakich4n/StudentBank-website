import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
    useColorModeValue
  } from '@chakra-ui/react';
  
  import { BsThreeDotsVertical } from 'react-icons/bs';
  import { FaRegFlag } from 'react-icons/fa';
  
  export default function ServerSecondaryOptions(props) {
    const background_color=useColorModeValue('white','rgba(53, 53, 53, 1)');
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center">
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label="Selection de la langue"
              icon={<BsThreeDotsVertical />}
              variant="solid"
              w="fit-content"
              {...props}
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }} bg={ background_color}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button justifyContent="start" leftIcon={<FaRegFlag />}>
                    Français
                </Button>
                <Button justifyContent="start" leftIcon={<FaRegFlag />}>
                    English
                </Button>
                <Button justifyContent="start" leftIcon={<FaRegFlag />}>
                    Espagnol
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }