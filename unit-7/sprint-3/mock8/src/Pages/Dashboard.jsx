import {
  Button,
  FormLabel,
  Image,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import {
  addData,
  deleteData,
  getAllData,
  updateData,
} from "../Redux/Admin/action";
import store from "../Redux/store";

const form= {
title:"",
poster:"",
director:"",
year:"",
genre:"",
IMDB_Rating:""
}

export const Dashboard = () => {
  const adminData = useSelector((store) => store.AdminReducer.adminData);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [IMDB_Rating, setIMDB_Rating] = useState("");
  const [ticket, setTicket] = useState(0);
  const [updateFrom, setUpdateForm] = useState(form);


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const handleAddData = (e) => {
    e.preventDefault();
    let newData = {
      title,
      poster,
      director,
      year,
      genre,
      IMDB_Rating,
      ticket,
    };

    dispatch(addData(newData)).then((res) => {
      dispatch(getAllData);
    });

    setTitle("");
    setDirector("");
    setPoster("");
    setYear("");
    setGenre("");
    setIMDB_Rating("");
    setTicket("");
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getAllData);
    });
  };

  const handleEdit = (id) => {
    let editData = {
      id,
      title,
      poster,
      director,
      year,
      genre,
      IMDB_Rating,
      ticket,
    };
    dispatch(updateData(editData)).then(() => {
      dispatch(getAllData);
    });
  };

  function updateFormHandler(e){
console.log("upadte working")
  }
  function updateFormOpener(data){
    onOpen
  }

  return (
    <>
    <Navbar />
    
      <div style={{ width: "40%", margin: "auto" }}>
        <h3
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
        >
          ADD Movie
        </h3>


        <form onSubmit={handleAddData} margin="auto">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormLabel>Poster Image</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <FormLabel>Director</FormLabel>
          <Input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <FormLabel>Year</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <FormLabel>Genre</FormLabel>
          <Select
            placeholder="Genre"
            name="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </Select>
          <FormLabel>IMDB_Rating</FormLabel>
          <Input
            type="text"
            value={IMDB_Rating}
            onChange={(e) => setIMDB_Rating(e.target.value)}
          />
          <FormLabel>Ticket Price</FormLabel>
          <Input
            type="number"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          />

          <Input
            type={"submit"}
            border="1px solid black"
            fontSize={"20px"}
            marginBottom="35px"
            cursor={"pointer"}
          />
        </form>
      </div>

      {/* {adminData.length > 0 && adminData.map((el)=>{
  return <AdminProductCard  {...el}/>
})} */}
      <div>
        <TableContainer ml={"200px"}>
          <Table variant="striped" colorScheme="teal">
            <Thead bgColor={"blue.400"}>
              <Tr>
                <Th color="white">S. No.</Th>
                <Th color="white">Title</Th>
                <Th color="white" isNumeric>
                  Ticket Price
                </Th>
                <Th color="white">Poster</Th>
                <Th color="white">Year</Th>
                <Th color="white">Genre</Th>
                <Th color="white">IMDB_Rating</Th>
                <Th color="white">EDIT</Th>
                <Th color="white">DELETE</Th>
              </Tr>
            </Thead>
            {adminData.length > 0 &&
              adminData.map((el) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{el.id} </Td>
                      <Td> {el.title}</Td>
                      <Td isNumeric>Price : {el.ticket} </Td>
                      <Td>
                        <Image
                          rounded={"lg"}
                          height={250}
                          objectFit={"cover"}
                          src={el.poster}
                          data-cy="product-image"
                        />
                      </Td>
                      <Td> {el.director}</Td>
                      <Td> {el.year}</Td>
                      <Td> {el.genre}</Td>
                      <Td> {el.IMDB_Rating}</Td>
                      <Td>
                        <Button
                          border={"1px solid gray"}
                          // onClick={() => handleEdit(el.id)}
                          onClick={()=>updateFormOpener(el)}
                        >
                          EDIT
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          border={"1px solid gray"}
                          onClick={() => handleDelete(el.id)}
                        >
                          DELETE
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
        <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={updateFormHandler}
          />
          <FormLabel>Poster Image</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={poster}
            onChange={updateFormHandler}
          />
          <FormLabel>Director</FormLabel>
          <Input
            type="text"
            value={director}
            onChange={updateFormHandler}
          />
          <FormLabel>Year</FormLabel>
          <Input
            type="text"
            mb={"25px"}
            value={year}
            onChange={updateFormHandler}
          />
          <FormLabel>Genre</FormLabel>
          <Select
            placeholder="Genre"
            name="genre"
            onChange={updateFormHandler}
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
          </Select>
          <FormLabel>IMDB_Rating</FormLabel>
          <Input
            type="text"
            value={IMDB_Rating}
            onChange={updateFormHandler}
          />
          <FormLabel>Ticket Price</FormLabel>
          <Input
            type="number"
            value={ticket}
            onChange={updateFormHandler}
          />

          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </>
  );
};
