import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
import celoGroups from "@celo/rainbowkit-celo/lists";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ToastContainer } from '@cred/neopop-web/lib/components';
import { GroupContext } from "@/Context/GroupContext";
import { Group } from "@/typings";
import { useState } from "react";

// const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string; // get one at https://cloud.walletconnect.com/app

const { chains, publicClient } = configureChains(
  [Celo, Alfajores],
  [publicProvider()]
);


const connectors = [new InjectedConnector({ chains })]

const appInfo = {
  appName: "Celo Composer",
};

const wagmiConfig = createConfig({
  connectors,
  publicClient: publicClient,
});

function App({ Component, pageProps }: AppProps) {
  const [groups, setGroups] = useState<Group[]>([])
  return (
    <WagmiConfig config={wagmiConfig}>
      <GroupContext.Provider value={{ groups: groups, setGroups: (groups) => setGroups(groups) }}>
        <RainbowKitProvider chains={chains} appInfo={appInfo} coolMode={true}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </RainbowKitProvider>
      </GroupContext.Provider>
    </WagmiConfig>
  );
}

export default App;
