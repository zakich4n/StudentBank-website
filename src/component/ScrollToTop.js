//import
import {useEffect, useState} from 'react';
import { AiOutlineToTop } from 'react-icons/ai'
import { Button} from "@chakra-ui/react";


export default function ScrollToTop() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);
    
    return (

        <Button
        onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        textAlign: 'center',
        display: visible ? 'inline' : 'none'
        }}
        leftIcon={<AiOutlineToTop/>}
        >
            Haut de page
        </Button>
    )
}