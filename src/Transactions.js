
import "./App.css";
import React, { useEffect, useState } from 'react'
import { Form, Modal, FormGroup } from 'react-bootstrap'
import { Button, ButtonGroup, Box, Wrap, Text, Heading, Divider, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import * as Icon from 'react-bootstrap-icons';
const moment = require('moment');
const Moralis = require("moralis").default;

const Transactions = (props) => {
  const userAddressState = props['userAddressState']
  const userState = props['user']
  const [tsx, setTsx] = useState([])
  const notify = () => toast("Transaction done successfully!");

  useEffect(() => {
    // const interval = setInterval(() => {
    //   if(userAddressState != null){
    //     fetchAllTransactions()
    //   }
    // }, 60000);
    
  });


  const fetchAllTransactions = async (f) => {
    if(userAddressState != null){
        const query = new Moralis.Query("EthTransactions");
        query.equalTo("to_address", userAddressState.toLowerCase());
        // subscribe to query updates
        // const subscription = await query.subscribe();
        // handleNewTransaction(subscription);
        // run query
        const results = await query.find();
        console.log("Results before sorting:::: ", results)
        let resultTsx = results.sort(function(a, b){
          return b.attributes.updatedAt - a.attributes.updatedAt
        })
        console.log("Results after sorting:::: ", resultTsx)
        setTsx(resultTsx)

        console.log("user transactions:", results);
    }
  }

  async function handleNewTransaction(subscription) {
    // log each new transaction
    subscription.on("create", function (data) {
      console.log("new transaction: ", data);
    });
  }

  async function getAverageGasPrices() {
    const results = await Moralis.Cloud.run("getAvgGas");
    console.log("average user gas prices:", results);
    //renderGasStats(results);
  }

  return (
    <div>
      <ToastContainer/>
        <Form fontSize="1xl" style={{ padding: "10px", textAlign: "initial",}}>
        <FormGroup className="mb-3" controlId="formBasicEmail" style={{ display: 'flex', flexDirection: 'column' }}>
        <Form.Label style={{ marginLeft: 'auto', marginRight: '200px', marginBottom: '10px', color: 'white', fontSize: '20px', textAlign: 'right' }}>Transaction History</Form.Label>
        
          <Icon.ArrowRepeat style={{ cursor: 'pointer', color: 'white', fontSize: '20px',marginLeft: 'auto', marginRight: '200px', marginBottom: '10px', color: 'white', fontSize: '20px', }} onClick={() => fetchAllTransactions()} />
        
      </FormGroup>
        
        </Form>
        <div>
        <ul>
            {tsx.map((ts, i) => (
                <li style={{fontSize: "10px",}} key={i}>
                   {ts.attributes.value / ("1e" + 18)} Eth ({ts.attributes.gas_price / ("1e" + 18)} Eth gas price) &nbsp; &nbsp;<i>{moment(ts.attributes.updatedAt).format("DD MMM, YYYY HH:MM")}</i>
                    
                </li>    
            ))}
            </ul>
        </div>
    </div>
  )
  
}

export default Transactions;