import "./App.css";
import React, { useEffect, useState, useRef } from 'react'
import { Form, Modal, FormGroup, Col } from 'react-bootstrap'
import { Button, ButtonGroup, Box, Wrap, Text, Heading, Divider, Stack, Alert, AlertIcon, Input } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Icon from 'react-bootstrap-icons';
const Moralis = require("moralis").default;

const UploadFile = (props) => {
  const [file, setFile] = useState('')
  const [filesArray, setFilesArray] = useState([])
  const userAddressState = props['userAddressState']
  const [address, setAddress] = useState('')
  const fileInput = useRef(null)
  const notify = () => toast("Document sent successfully!");
  const uploadNotify = () => toast("Contract uploaded successfully!");


  useEffect(() => {
    // const interval = setInterval(() => {
    // if(userAddressState != null){
    //   fetchAllDocuments()
    // }}, 60000);
    
  });

  const fetchAllDocuments = async (f) => {
    const query = new Moralis.Query('Applications')
    var files = []
    var i = 0
    query.equalTo('address', userAddressState.toLowerCase())
    var results = await query.find();
    results.map((result, i) => {
        console.log(result)
        const fileName = result.get('fileName')
        const ipfs = result.get('file').ipfs()
        console.log(ipfs)
        const hash = result.get('file').hash()
        files.push({'fileName': fileName, 'ipfs': ipfs, 'hash': hash})
        console.log(files)
    })
        
     //console.log(files)
    setFilesArray(files)
    // console.log(filesArray)
  }

  const saveFileIPFS = async (event) => {
    let f = event.target.files[0]
    console.log("FILE",f)
    console.log(f.name)
    console.log(userAddressState)
    const fileObj = new Moralis.File(f.name, f)
    
    await fileObj.saveIPFS()
    // console.log("fileobj", typeof(fileObj))
    // const fileIpfs = await saveFile(f.name, f, {saveIPFS: true})
    // console.log("fileipfs", fileIpfs)
    
    // const ipfs = fileIpfs.ipfs()
    // setFile(ipfs)

    // Save file reference to Moralis
    const jobApplication = new Moralis.Object('Applications')
    jobApplication.set('address', userAddressState.toLowerCase());
    jobApplication.set('file', fileObj);
    jobApplication.set('fileName', f.name);
    await jobApplication.save(null, { useMasterKey: true })

    console.log("Job application ::: " + JSON.stringify(jobApplication));
    uploadNotify()
    
  }

  const transferDocument = async (index, event) => {
    event.preventDefault()
    console.log("in transfer document")
    const f = filesArray[index]
    console.log(f)
    const file = new File([f.hash], f.fileName, {type: "application/pdf"})
    console.log(file)

    const fileObj = new Moralis.File(file.name, file)

    const jobApplication = new Moralis.Object('Applications')
    jobApplication.set('address', address.toLowerCase());
    jobApplication.set('file', fileObj);
    jobApplication.set('fileName', file.name);
    await jobApplication.save(null, { useMasterKey: true })
    setAddress('')
    notify()
  }

  const downloadFile = (fileUrl) => {
    console.log(fileUrl)
    if(fileUrl != null){
        window.open(fileUrl, "_blank")
    }
    
  }

  function handleChange(e) {
    // log each new transaction
    //console.log(e.target.value)
    setAddress(e.target.value)
  }

  return (
    <div>
      <ToastContainer />
        {/* <Form fontSize="1xl" style={{ padding: "10px", textAlign: "initial", fontWeight: "bold" }}>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Button colorScheme="green">
              Upload document
            </Button>
                <Form.Control
                type="file"
                onChange={(e) => saveFileIPFS(e.target.files[0])}
                />
            </Form.Group> }

            
        </Form> */}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <div className="image-upload">
            <label htmlFor="file-input">
                <i className="attach-doc fa fa-upload fa-1x" style={{color: "white", padding: "10px",fontSize: 16, marginLeft: 20}} aria-hidden="true"> Upload document</i>
            </label>

            <input id="file-input" onChange={(e) => saveFileIPFS(e)} type="file"/>
        </div>

        {/* <div className="file-uploader">
            <input type="file" onChange={saveFileIPFS} className="custom-file-input" />
            
        </div> */}
        <div>
          <h4 className="title" style={{color:"White",marginLeft:30,fontSize:16}}>Documents attached 
          {/* <Icon.ArrowRepeat style={{cursor: "pointer", marginRight: "55px", marginTop: "7px", float: 'right', color: 'white', marginLeft: '10px'}} onClick={() => fetchAllDocuments() } /> */}
          </h4>
          
            {/* <Button style={{ display: "block" }} colorScheme="green" variant="outline" onClick={fetchAllDocuments}>Fetch Documents</Button> */}
            
            {filesArray.map((file, i) => (
                <div key={i}>
                    <p style={{color: "white", fontSize: 14}} onClick={() => downloadFile(file.ipfs)}>{file.fileName}</p> 
                    {/* <Form fontSize="1xl" style={{ padding: "10px", textAlign: "initial", fontWeight: "bold" }}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Enter to address" onChange={handleChange}/>
                          <Button type="submit" onClick={(e) => transferDocument(i, e)}>Send document</Button>
                      </Form.Group>    
                  </Form> */}
                  <Form>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input style={{width: "20%", height: "30px", backgroundColor: "#ecf8ec", color: "black", fontSize: 14}} type="text" placeholder="Enter to address" id={`id-${i}`} onChange={handleChange}/>
                        <Button style={{marginTop: "-1px", height: "30px", fontSize: 14}} colorScheme="green" type="submit" onClick={(e) => transferDocument(i, e)}>Send</Button>
                      </Col>
                      <br/>
                    </FormGroup>
                    </Form>

                    <br/>
                </div>
            ))}
            
        </div>
    </div>
  )
  
}

export default UploadFile;
