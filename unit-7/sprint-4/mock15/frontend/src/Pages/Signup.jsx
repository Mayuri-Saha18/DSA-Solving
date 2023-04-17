import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { register } from "../Redux/AuthReducer/action";
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "../Redux/AuthReducer/actionType";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  email: "",
  password: "",
};

export default function Signup() {
  const [state, setter] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = () => {

    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate("/login");
        alert("Register Succefully");
      } else if (r === REGISTER_FAILURE) {
        alert("Wrong Input");
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Sign-Up Here
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Enter Your Email"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={state.email}
            onChange={(e) => setter({ type: "email", payload: e.target.value })}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Your Password"
            value={state.password}
            onChange={(e) => setter({ type: "password", payload: e.target.value })}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={signupHandler}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
