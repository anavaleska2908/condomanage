import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Select,
    FormControl,
    FormHelperText,
   
    } from '@chakra-ui/react'
import Inputs from '../Tenants-Input'

const ModalAddTenants =({register,handleAddTenants,handleSubmit,setStatusHome,isAddOpen,onAddClose,errors})=>{
    
   return (
   <Modal isOpen={isAddOpen} onClose={onAddClose}>
    <ModalOverlay />
    <ModalContent  bg="#141155">
        <ModalHeader
        bg="#00A5AE"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px">Adicionar Inquilino</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Box
             h={["75%"]}
             css={{
                 "&::-webkit-scrollbar": {
                 width: "4px",
                 },
                 "&::-webkit-scrollbar-track": {
                 width: "6px",
                 },
                 "&::-webkit-scrollbar-thumb": {
                 background: "#00A5AE",
                 borderRadius: "24px",
                 },
             }}
             overflowY="scroll">

                <form onSubmit={handleSubmit(handleAddTenants)}>
                <FormControl  >
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguite o email</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.email?.message}
                    </FormHelperText>
                </Box>
                <Inputs ph="Diguite o email" register={register} registerData="email" bgColor="#00A5AE" phColor="white" type="text" name="email" ></Inputs>
                
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguite a senha</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.password?.message}
                    </FormHelperText>
                </Box>
                <Inputs ph="Diguite a senha" register={register} registerData="password"  bgColor="#00A5AE" phColor="white" type="password" name="password"  ></Inputs>
                
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguite o numero do Imovel</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.number?.message}
                    </FormHelperText>
                </Box>
                <Inputs ph="Diguite o numero do imovel" register={register} registerData="number"  bgColor="#00A5AE" phColor="white" type="number" name="number" ></Inputs>
                
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguite o Nome do responsavel</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.responsible?.message}
                    </FormHelperText>
                </Box>
                <Inputs ph="Diguite o nome do responsavel" register={register} registerData="responsible"  bgColor="#00A5AE" phColor="white" type="text" name="responsible" ></Inputs>   
                
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguito o CPF</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.cpf?.message}
                    </FormHelperText>
                </Box>
                <Inputs  ph="Diguite o numero do CPF"  register={register} registerData="cpf" bgColor="#00A5AE" phColor="white" type="number" name="cpf" ></Inputs> 
               
                <Box display='flex' alignItems="center" justifyContent="space-between">
                    <Text color="white">Diguite o valor</Text>
                    <FormHelperText variant="text1"
                    color="red"
                    fontSize="12px"
                    fontWeight="700px">
                    {errors.cpf?.message}
                    </FormHelperText>
                </Box>
                <Inputs ph="Valor do condominio" register={register} registerData="value"  bgColor="#00A5AE" phColor="white" type="number" name="value" ></Inputs>
                    
                <Text color="white">Selecione o status do imovel</Text>
                    <Select bgColor="#00A5AE" w="94%"{...register("status")} name="status" onChange={(e)=>setStatusHome(e.target.value)}>
                        <option selected="selected" value="selecione">vago</option>
                        <option value="comprado" selected>comprado</option>
                        <option value="alugado">Alugado</option>
                    </Select>
                    
                    <ModalFooter 
                    
                    display="flex"
                    justifyContent="space-around"
                    >
                        <Box padding={["25px","30px"]}>

                            <Button type="reset"  colorScheme='blue' mr={3} onClick={onAddClose}>
                            Fechar
                            </Button>
                            <Button  type="submit"variant='default'>Alterar usuario</Button>
                        </Box>
                    </ModalFooter>

                </FormControl>
                
                </form>
            </Box>
        
        </ModalBody>

    </ModalContent>
    </Modal>)
    
}

export default ModalAddTenants