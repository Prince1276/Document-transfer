
import "./App.css";
import React, { useEffect, useState } from 'react'
import { Form, Modal, FormGroup } from 'react-bootstrap'
import { Button, ButtonGroup, Box, Wrap, Text, Heading, Divider, Stack, Alert, AlertIcon, Input } from "@chakra-ui/react";
import * as Icon from 'react-bootstrap-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Moralis = require("moralis").default;

const Funds = (props) => {
  const userAddressState = props['userAddressState']
  const userState = props['user']
  const [tsx, setTsx] = useState([])
  const [address, setAddress] = useState([])
  const [amount, setAmount] = useState([])
  const notify = () => toast("Funds transferred successfully!");


  function handleChange(e) {
    // log each new transaction
    //console.log(e.target.value)
    setAddress(e.target.value)
  }

  function handleEthChange(e) {
    // log each new transaction
    //console.log(e.target.value)
    setAmount(e.target.value)
  }


  async function handleNewTransaction(e) {
      console.log("in tsx")
      e.preventDefault()
      await Moralis.enableWeb3()
      const data = {
          type: "native",
          amount: Moralis.Units.ETH(amount),
          receiver: address
      }
      let result = await Moralis.transfer(data);
      console.log(result)
      notify()
      setAddress('')
      setAmount('')
    // log each new transaction
    // subscription.on("create", function (data) {
    //   console.log("new transaction: ", data);
    // });
  }

  return (
    <div style={{marginRight:40 ,justifyContent:"left"}}>
  <ToastContainer />
  <Form style={{ padding: "10px", textAlign: "initial", marginLeft: 900 }}>
    <FormGroup className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{ color: "white", fontSize: 20 }}>Transfer To<br></br></Form.Label>
      <br/>
      <Input
        style={{
          width: "100%",
          height: "30px",
          marginBottom: "10px",
          backgroundColor: "#ecf8ec",
          color: "black",
          padding: "5px",
          borderRadius: 10
        }}
        type="text"
        placeholder="Enter to address"
        onChange={handleChange}
        value={address}
      />
      <br/>
      <Input
      style={{
        width: "100%",
        height: "30px",
        marginBottom: "10px",
        backgroundColor: "#ecf8ec",
        color: "black",
        padding: "5px",
        borderRadius: 10
        }}
        type="text"
        placeholder="Enter Eth"
        onChange={handleEthChange}
        value={amount}
      />
      <br/>
      <Button
      style={{ height: "50px", width:"90px",borderRadius: 10,color:"white", backgroundColor:"green"}}
        colorScheme="green"
        type="submit"
        onClick={handleNewTransaction}
      >
        Transfer
      </Button>
    </FormGroup>
  </Form>
  <div>
    <ul>
      {tsx.map((ts, i) => (
        <li key={i}>
          {ts.attributes.value / ("1e" + 18)} Eth - ({ts.attributes.gas_price / ("1e" + 18)} Eth gas price)
          <br/>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
  
}

export default Funds;