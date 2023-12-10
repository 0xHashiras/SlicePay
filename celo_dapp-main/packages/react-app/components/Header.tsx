import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Typography } from '@cred/neopop-web/lib/components';
import { colorPalette, FontVariant, mainColors } from '@cred/neopop-web/lib/primitives';


export default function Header() {
    const [hideConnectBtn, setHideConnectBtn] = useState(false);
    const [userAddress, setUserAddress] = useState<any>("");
  const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    useEffect(() => {
        if (window.ethereum && window.ethereum.isMiniPay) {
            setHideConnectBtn(true);
            connect();
        }
    }, []);

    useEffect(() => {
        if(isConnected) {
            setUserAddress(address)
        }
    }, [])

    return (
        <></>
        // <Typography {...FontVariant.CapsBold10} color={mainColors.yellow}>
        //     {userAddress}
        // </Typography>
    );
}

declare global {
    interface Window {
        ethereum: any;
    }
}
