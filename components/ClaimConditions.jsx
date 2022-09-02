import { useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function SetClaimConditions({ tokenDropContract })
    const presaleStartTime = new Date();
    const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
    const claimConditions = [
    {
        startTime: presaleStartTime, // start the presale now
        maxQuantity: 3117.42, // limit how many tokens are released in this presale
        price: 0.001, // presale price per token
        snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
    },
    {
        startTime: publicSaleStartTime, // 24h after presale, start public sale
        price: 0.008, // public sale price per token
    }
    ]
await contract.claimConditions.set(claimConditions);