import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
import TokenHolders from "../components/TokenHolders";
import Claim from "../components/Claim";
import Transfer from "../components/Transfer";
import truncateAddress from "../lib/truncateAddress";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const tokenDropContract = useTokenDrop(
    "0xE50A259592D3BaBbA4d874Ca3EA87E88BC8b086F"
  );

  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        {address ? (
          <>
            <a onClick={disconnectWallet} className={styles.secondaryButton}>
              Disconnect Wallet
            </a>
            <p>Your address: {truncateAddress(address)}</p>

            <hr className={styles.divider} />

            <img 
              src="/MTEC.png"
              alt="MTEC Logo"
              width={250}
              />

            <h2>Claim</h2>
            <Claim tokenDropContract={tokenDropContract} />

            <hr className={styles.divider} />

            <h2>Transfer</h2>
            <Transfer tokenDropContract={tokenDropContract} />
          </>
        ) : (
          <button className={styles.mainButton} onClick={connectWithMetamask}>
            Connect Wallet
          </button>
        )}

        <hr className={styles.divider} />

        <h2>Token Holders</h2>
        <TokenHolders />
      </div>
      </div>
  );
}
