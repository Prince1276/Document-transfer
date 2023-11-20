import LYBBackground from "./LYB-background.png";
import React, { useState, useEffect } from "react";
import { WagmiConfig, createConfig, useAccount, useConnect, useDisconnect } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { goerli } from "wagmi/chains";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import Account from './pages/Account'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import About from './pages/About'

let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];
const chain = "testnet";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: goerli,
    transport: http(),
  }),
});

function App() {
  

  return (
    <Router>
    
      <WagmiConfig config={config}>
      <div className="app-container">
      <Navbar />
      <Sidebar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      <Footer />
    </div>
      </WagmiConfig>
    </Router>
  );
}

export default App;
