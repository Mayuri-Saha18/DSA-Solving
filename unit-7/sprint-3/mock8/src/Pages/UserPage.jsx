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
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    getAllData,
  } from "../Redux/Admin/action";
  
  export const UserPage = ({title,poster,director,year,genre,IMDB_Rating,ticket}) => {
    const adminData = useSelector((store) => store.AdminReducer.adminData);
    const dispatch = useDispatch();
    // const [title, setTitle] = useState("");
    // const [poster, setPoster] = useState("");
    // const [director, setDirector] = useState("");
    // const [year, setYear] = useState("");
    // const [genre, setGenre] = useState("");
    // const [IMDB_Rating, setIMDB_Rating] = useState("");
    // const [ticket, setTicket] = useState(0);
  
    useEffect(() => {
      dispatch(getAllData);
    }, []);
  



  
    return (
      <>
        <div style={{ width: "90%", margin: "auto" }}>
          <h3
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            Movie
          </h3>
  

        </div>
        

        <div>
          <TableContainer margin="auto" width="98%">
            <Table variant="striped" colorScheme="teal">
              <Thead bgColor={"blue.400"}>
                <Tr>
                  <Th color="white">S. No.</Th>
                  <Th color="white">Title</Th>
                  <Th color="white" isNumeric>
                    Ticket Price
                  </Th>
                  <Th color="white">Poster</Th>
                  <Th color="white">Director</Th>
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
                            height={100}
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
                          >
                            EDIT
                          </Button>
                        </Td>
                        <Td>
                          <Button
                            border={"1px solid gray"}
                            // onClick={() => handleEdit(el.id)}
                          >
                            Delete
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
            </Table>
          </TableContainer>
        </div>
      </>
    );
  };
  