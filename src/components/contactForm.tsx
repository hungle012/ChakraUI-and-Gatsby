import React from "react";
import "../style/contactForm.css";
import {
  Button,
  IconButton,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="contact">
        <h2>Contact</h2>
        <p>Fill up the form below to contact</p>
        <div className="contact__tag">
          <ul>
            <li>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdPhone color="#1970F1" size="20px" />}
              >
                +91-988888888
              </Button>
            </li>
            <li>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdEmail color="#1970F1" size="20px" />}
              >
                hello@abc.com
              </Button>
            </li>
            <li>
              <Button
                size="md"
                height="48px"
                width="200px"
                variant="ghost"
                color="#DCE2FF"
                _hover={{ border: "2px solid #1C6FEB" }}
                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
              >
                Karnavati, India
              </Button>
            </li>
          </ul>
        </div>
        <div className="contact__icon">
          <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<MdFacebook size="28px" />}
          />
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<BsGithub size="28px" />}
          />
          <IconButton
            aria-label="discord"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: "#0D74FF" }}
            icon={<BsDiscord size="28px" />}
          />
        </div>
      </div>
      <div className="form">
        <VStack spacing={5}>
          <FormControl id="name">
            <FormLabel>Your Name</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<BsPerson color="gray.800" />}
              />
              <Input type="text" size="md" />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="text" size="md" />
            </InputGroup>
          </FormControl>
          <FormControl id="name">
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: "gray.300",
              }}
            />
          </FormControl>
          <FormControl id="name" float="right">
            <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
              Send Message
            </Button>
          </FormControl>
        </VStack>
      </div>
    </div>
  );
};

export default ContactForm;
