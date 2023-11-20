import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import {
  Flex,
  Button,
  ButtonGroup,
  Box,
  Wrap,
  Text,
  Heading,
  Divider,
  Stack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Center,
} from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import Blockchain from "../Blockchain.png";
import React, { useState, useEffect } from "react";
import UploadFile from "../UploadFile";
import Transactions from "../Transactions";
import Funds from "../Funds";
import Materials from "../Materials";
import * as Icon from "react-bootstrap-icons";


const LogOut = () => {
  const { disconnect } = useDisconnect();
  return (
    <Button
      display={"block"}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        borderRadius: "10px",
        backgroundColor: "green",
        padding: "5px 10px",
        color: "white",
        marginTop: "50px",
      }}
      colorScheme="red"
      variant="solid"
      onClick={() => disconnect}
    >
      Logout
    </Button>
  );
};

export default function Home() {
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const [openModel, setOpenModel] = useState(false);
  const [userAddressState, setUserAddressState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isConnected) {
        setUserAddressState(address);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [connector]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Blockchain})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <LogOut />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "-100px",
          }}
        >
          <h2
            className="title"
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "24px",
              marginTop: "50px",
            }}
          >
            Document Sender
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="hosted-by-ethereum"
            style={{
              marginTop: "150px",
              color: "white",
              fontSize: "14px",
              marginLeft: "100px",
            }}
          >
            Hosted by: Ethereum
          </div>
          <br />
          <div
            className="address"
            style={{ color: "white", fontSize: "14px", marginLeft: "100px" }}
          >
            User Address: {userAddressState}
            <Icon.ArrowRepeat
              style={{ cursor: "pointer", color: "white", marginLeft: "10px" }}
              onClick={() => fetch()}
            />
          </div>



          <div
            className="card"
            style={{
              marginTop: '-100px',
              marginBottom: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Materials user={useState} userAddressState={userAddressState} />
          </div>
          <div
            className="card"
            style={{
              marginBottom: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <Funds user={useState} userAddressState={userAddressState} />
          </div>
          <div
            className="card"
            style={{
              marginBottom: "20px",
              marginLeft: "20px",
              marginRight: "50px",
            }}
          >
            <Transactions
              user={useState}
              userAddressState={userAddressState}
            />
          </div>
        </div>

        {openModel && (
          <Alert status="error">
            <AlertIcon />
            Please switch to Avalanche Network
          </Alert>
        )}

        <Button style={{ display: "none", marginBottom: "10px" }} colorScheme="green">
          Refetch Native balance
        </Button>

        <Button className="transaction" style={{ display: "none" }} colorScheme="green">
          Make a transaction
        </Button>
        <div style={{ marginLeft: '60px', marginTop: '-450px' }}>
          <UploadFile />
        </div>
      </div>
    </>
  );
}
