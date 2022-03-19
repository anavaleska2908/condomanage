import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { TenantsContext} from "../../Providers/Tenants"
import {
  Button,
  Box,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import ModalAddTenants from "../ModalAddTenants";
import ModalListTenants from "../ModalListTenants";
const TenantsPage =()=>{
    const { isOpen:isAddOpen, onOpen:onAddOpen, onClose:onAddClose } = useDisclosure();
   
    const {showTenants,tenants} = useContext(TenantsContext)

    const { 
        isOpen: isOpenAlterTenants, 
        onOpen: onOpenAlterTenants, 
        onClose: onCloseAlterTenants 
    } = useDisclosure()

  const [statusHome, setStatusHome] = useState();
  const [currentTenants,setCurrentTenants]= useState([]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail invalido")
      .required("Diguite um E-mail valido"),
    password: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .required("Crie uma senha"),
    number: yup.string().required("Diguite o Number do imovel"),
    responsible: yup.string().required("Diguite o nome do responsavel"),
    cpf: yup.number().required("Diguite o CPF do Inquilino"),
    value: yup.number().required("Diguite o valor pago mensalmente"),
  });

  const {register,handleSubmit,formState: { errors },} = useForm({
    resolver: yupResolver(schema),
  });
  
  
  const handleAddTenants = ({email,password,number,responsible,cpf,value,}) => {
    const newTenants = {
      email,
      password,
      number,
      responsible,
      cpf,
      value,
      status: statusHome,
      userId: 1,
    };
    axios
      .post("https://api-condomanage.herokuapp.com/tenants", newTenants, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NjkzNzUyLCJleHAiOjE2NDc2OTczNTIsInN1YiI6IjEifQ.KOdzSlK1uCk-0V3pM4crgu0jQIHiqlufUDrIcechBwY`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((erro) => console.log(erro));
  };

  const handleChangeTenants = ({email,password,number,responsible,cpf,value,})=>{
    const changeTenants = {
      email,
      password,
      number,
      responsible,
      cpf,
      value,
      status: statusHome,
      userId: 1,
    };
    axios
    .put(`https://api-condomanage.herokuapp.com/tenants/${currentTenants.id}`,changeTenants,{
      headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NjkzNzUyLCJleHAiOjE2NDc2OTczNTIsInN1YiI6IjEifQ.KOdzSlK1uCk-0V3pM4crgu0jQIHiqlufUDrIcechBwY`
      }
    }).then((resp)=>console.log(resp).catch((erro)=>console.log(erro)))
  }


  useEffect(() => {
    showTenants("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjAxdGVzdGVAdGVzdGUuY29tIiwiaWF0IjoxNjQ3NjkzNzUyLCJleHAiOjE2NDc2OTczNTIsInN1YiI6IjEifQ.KOdzSlK1uCk-0V3pM4crgu0jQIHiqlufUDrIcechBwY")
  }, [tenants]);

  return (
    <>
    <Box
    margin="10px auto"
    w="90%"
    h="90%"
    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    borderRadius="30px"
    >
    
    <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    margin="10px"
    h="90px"
    
    >

      <Heading variant="title1">Lista de apartamento</Heading>
      <Button 
      variant="default" 
      onClick={onAddOpen}
      w="45px"
      h="45px"
      borderRadius="100%"
      fontSize="30px"
      bg="#141155"
      >+
      </Button>

      <ModalAddTenants
        register={register}
        handleAddTenants={handleAddTenants}
        handleSubmit={handleSubmit}
        setStatusHome={setStatusHome}
        onAddClose={onAddClose}
        isAddOpen={isAddOpen}
        errors={errors}
      />

    </Box>

      <Box
       w={["100%"]}
       h="100%"
       bg="#c5e8fb"
       d="flex"
       flexDir="column"
       justifyContent="center"
       alignItems="center"
       padding='20px'
      >
       
          
            
        {tenants?.map((tenant,index) => (
          <Box 
          
          w="100%" 
          
          key={index} 
          onClick={()=>setCurrentTenants(tenant)}
          display="flex"
          justifyContent="center"
          
          >

          <Box
          textAlign="center"
          color="#ffffff"
          borderRadius="18px"
          padding={["4px","10px"]}
           bg="#00a5ae"
          display="flex"
          justifyContent="space-between"
          margin="10px"
          w="80%"  
          fontSize={["18px","28px"]}
          h={["30px","35px","60px"]}
          variant="default"
          key={index} 
          onClick={onOpenAlterTenants} >
            <Box>{tenant.responsible} {tenant.number}</Box>
            <Box 
            borderRadius="100%"
            width={["20px","30px"]}
            height={["20px","30px"]}
            bg="green"
            > </Box>
          </Box>
          </Box>
        ))}
          </Box>
        <ModalListTenants 
         errors={errors}
        currentTenants={currentTenants} 
        onCloseAlterTenants={onCloseAlterTenants}
        isOpenAlterTenants={isOpenAlterTenants}
        register={register}
        handleSubmit={handleSubmit}
        setStatusHome={setStatusHome}
        handleChangeTenants={handleChangeTenants}/>
    </Box>
    </>
  );

}
export default TenantsPage