import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { Button } from '@cred/neopop-web/lib/components';
import { showToast } from '@cred/neopop-web/lib/components';
import Link from "next/link";
import { colorConfig } from "@/components/Common";
import { Typography } from '@cred/neopop-web/lib/components';
import { colorPalette, FontVariant, mainColors } from '@cred/neopop-web/lib/primitives';
import { abi } from '@/utils/abi';

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();


  useEffect(() => {
    console.log("hey..", isConnected)
    if (isConnected && address) {
      setUserAddress(address);
      // showToastNotif(address)
    }
  }, [address, isConnected]);

  const showToastNotif = (address: string) => {
    console.log("hello")
    showToast(`You connected on.. ${address}`, { content: "Sample toast message...", type: 'success', dismissOnClick: true, autoCloseTime: 5000 });
  };

  const getKey = () => {

  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h1 text-white">
        <Typography {...FontVariant.HeadingSemiBold16} color={mainColors.white}>
          Address:
        </Typography>
      </div>
      {isConnected && (
        <Typography {...FontVariant.HeadingSemiBold16} color={mainColors.white}>
          {userAddress}
        </Typography>
      )}
      <Link href={"/groups"}>
        <Button
          variant="primary"
          kind="elevated"
          size="big"
          colorMode="light"
          colorConfig={colorConfig}
        >
          Create Group..
        </Button>
      </Link>
      <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="light"
        colorConfig={colorConfig}
        onClick={() => { }}
      >
        Get Key
      </Button>
    </div>
  );
}
