import detectEthereumProvider from "@metamask/detect-provider";
import { useState } from "react";
// import Web3 from "web3";

export enum StatusDefault {
  SUCCESS = "success",
  ERROR = "error",
  PENDING = "pending",
  LOADING = "loading",
}

export interface StatusReturns {
  status: StatusDefault;
  message?: string;
  solution?: string;
}

interface UseMetamask {
  detectMetamask: boolean;
  connectMetamask: () => Promise<StatusReturns>;
}

export const useMetamask = (): UseMetamask => {
  const [detectMetamask, setDetectMetamask] = useState<boolean>(false);

  const connectMetamask = async (): Promise<StatusReturns> => {
    const provider = await detectEthereumProvider();
    console.log("#1 detectMetamask", detectMetamask);

    if (provider) {
      console.log("#2 detectMetamask", detectMetamask);
      setDetectMetamask(true);
      console.log("provider is TRUE");

      // TODO: Verificar Network
      // TODO: Network errada: solicita a troca (switchEthereumChain)
      // TODO: Network certa: conectar (eth_requestAccounts)
      // TODO: Get wallet ID
      // TODO: Set connected

      return {
        status: StatusDefault.SUCCESS,
        message: "MetaMask Connected.",
      };
    } else {
      console.log("#3 detectMetamask", detectMetamask);
      console.log("provider is FALSE");
      return {
        status: StatusDefault.ERROR,
        message: "MetaMask Not Found.",
        solution:
          "Please, install the MetaMask chrome extension and try again.",
      };
    }
  };

  return { detectMetamask, connectMetamask };
};
