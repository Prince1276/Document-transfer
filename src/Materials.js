
import "./App.css";
import React, { useEffect, useState } from 'react'
import { Form, Modal, FormGroup } from 'react-bootstrap'
import { Button, ButtonGroup, Box, Wrap, Text, Heading, Divider, Stack, Alert, AlertIcon, Input } from "@chakra-ui/react";
import * as Icon from 'react-bootstrap-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Moralis = require("moralis").default;

const Materials = (props) => {
  const userAddressState = props['userAddressState']
  const userState = props['user']
  const [address, setAddress] = useState([])
  const [quantity, setQuantity] = useState([])

  const notify = () => toast("Materials captured successfully!");

  useEffect(() => {
    console.log("in Materials")
    const fetchData = async () => {
        // console.log("address")
        // console.log(address)
        // let quantities = 0
        // const query = new Moralis.Query("Materials");
        // query.equalTo("supplierId", address);
        // const results = await query.find();
        // console.log("results")
        // console.log(results);
        // results.map((result, index) => {
        //     console.log("res", result.attributes.quantity)
        //     quantities += result.attributes.quantity
        // })
        // console.log("quantities", quantities)
        // if(quantities > 100){
        //     await Moralis.enableWeb3()
        //     const data = {
        //         type: "native",
        //         amount: Moralis.Units.ETH(0.3),
        //         receiver: address
        //     }
        //     let resultTransaction = await Moralis.transfer(data)
            
        //     console.log("tsx ", resultTransaction)

        // }
        //return results;
    }

    fetchData()
    .catch(console.error)
  }, []);


  function handleChange(e) {
    // log each new transaction
    //console.log(e.target.value)
    setAddress(e.target.value)
  }

  function handleQuantityChange(e) {
    // log each new transaction
    //console.log(e.target.value)
    setQuantity(e.target.value)
  }


  async function updateMaterials(e) {
        console.log("in tsx")
        e.preventDefault()
        debugger
        const jobApplication = new Moralis.Object('Materials')
        jobApplication.set('supplierId', address);
        jobApplication.set('businessId', userAddressState);
        jobApplication.set('quantity', parseInt(quantity));
        jobApplication.set('price', quantity);
        await jobApplication.save(null, { useMasterKey: true })

        console.log("address")
        console.log(address)
        let quantities = 0
        const query = new Moralis.Query("Materials");
        query.equalTo("supplierId", address);
        const results = await query.find();
        
        console.log("results", results);
        results.map((result, index) => {
            console.log("res", result.attributes.quantity)
            quantities += result.attributes.quantity
        })
        console.log("quantities", quantities)
        if(quantities > 100){
            await Moralis.enableWeb3()
            const data = {
                type: "native",
                amount: Moralis.Units.ETH(0.3),
                receiver: address
            }
            let resultTransaction = await Moralis.transfer(data)
            
            console.log("tsx ", resultTransaction)

        }
        notify()
        setAddress('')
        setQuantity('')
  }

  return (
    <div style={{marginRight:40 ,justifyContent:"left",padding: "10px", textAlign: "initial", marginLeft: 900, }}>
  <ToastContainer />
  <br/>
  <Form style={{  }}>
    <FormGroup className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{ color: "white", fontSize: 20 }}>Materials received<br></br></Form.Label>
      <br/>
      <Input
        type="text"
        style={{
          width: "100%",
          height: "30px",
          marginBottom: "10px",
          backgroundColor: "#ecf8ec",
          color: "black",
          padding: "5px",
          borderRadius: 10
        }}
        placeholder="Enter from address"
        value={address}
        onChange={handleChange}
      />
      <br/>
      <Input
        type="text"
        style={{
          width: "100%",
          height: "30px",
          marginBottom: "10px",
          backgroundColor: "#ecf8ec",
          color: "black",
          padding: "5px",
          borderRadius: 10
        }}
        placeholder="Enter quantity"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <br/>
      <Button
        colorScheme="green"
        style={{ height: "50px", width:"90px",borderRadius: 10,color:"white", backgroundColor:"green"}}
        type="submit"
        onClick={updateMaterials}
      >
        Submit
      </Button>
    </FormGroup>
  </Form>
</div>

  )
  
}

export default Materials;