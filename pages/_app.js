import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import Header from "../components/Header";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>MetaTec Token Claim</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="thirdweb Example Repository to Showcase the token drop contract, including claim and transfer features."
        />
        <meta
          name="keywords"
          content="KroinicKatz, Kronic, KronicLabz, NFT, MTEC $MTEC, MetaTec, thirdweb token drop, thirdweb token transfer, thirdweb token claim, thirdweb token claim phases"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
