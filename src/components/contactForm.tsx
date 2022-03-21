import React, { useReducer, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export const initialState = {
  contacts: [],
};

export const addContact = (payload: any) => {
  return {
    type: "ADD_CONTACT",
    payload,
  };
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
      break;
    default:
      throw new Error("Bad action");
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { contacts }: any = state;

  const handleInputName = (event: any) => {
    setName(event.target.value);
    // console.log(name);
  };
  const handleInputMail = (event: any) => {
    setMail(event.target.value);
    // console.log(mail);
  };
  const handleInputMess = (event: any) => {
    setMessage(event.target.value);
    // console.log(message);
  };
  const handleSubmit = () => {
    dispatch(
      addContact({
        name: name,
        mail: mail,
        message: message,
      })
    );
    console.log(contacts);
  };

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
              <Input type="text" size="md" onChange={handleInputName} />
            </InputGroup>
          </FormControl>
          <FormControl id="mail">
            <FormLabel>Mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input type="text" size="md" onChange={handleInputMail} />
            </InputGroup>
          </FormControl>
          <FormControl id="mess">
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: "gray.300",
              }}
              onChange={handleInputMess}
            />
          </FormControl>
          <FormControl id="name" float="right">
            <Button
              variant="solid"
              bg="#0D74FF"
              color="white"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </FormControl>
        </VStack>
      </div>
      <div className="contact__list">
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 8 }}
        >
          <div className="box-title">
            <h2>List contact</h2>
          </div>
          <div className="box-lists">
            <div className="box-list">
              {contacts.map((item: any, index: number) => {
                return (
                  <div className="box-item" key={index}>
                    <div className="box-name">{item.name}</div>
                    <div className="box-mail">{item.mail}</div>
                    <div className="box-mess">{item.message}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ContactForm;
