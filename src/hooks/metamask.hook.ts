import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useRef, useState } from "react";
import Web3 from "web3";

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
  walletId?: string;
}

export const useMetamask = (): UseMetamask => {
  const [detectMetamask, setDetectMetamask] = useState<boolean>(false);
  const [walletId, setWalletId] = useState<string>();
  const ethereum = useRef<MetaMaskInpageProvider | null>(
    (window.ethereum as MetaMaskInpageProvider) || null
  );

  const switchNetwork = async (): Promise<unknown> => {
    const chainId = Web3.utils.toHex(Number(process.env.REACT_APP_CHAIN_ID));
    return await ethereum.current?.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  };

  const connectMetamask = async (): Promise<StatusReturns> => {
    const provider = await detectEthereumProvider();
    console.log("#1 detectMetamask", detectMetamask);

    if (provider) {
      console.log("#2 detectMetamask", detectMetamask);
      setDetectMetamask(true);

      // TODO: Verificar Network
      const validNetwork =
        (await switchNetwork().catch(({ message }) => ({
          status: StatusDefault.ERROR,
          message,
        }))) === null;
      console.log("validNetwork", validNetwork);
      /**
       * -32603: Unrecognized chain ID
       * 4001: User rejected the request
       *
       */

      // TODO: Network errada: solicita a troca (switchEthereumChain)
      // TODO: Network certa: conectar (eth_requestAccounts)
      // TODO: Get wallet ID
      // TODO: Set connected

      return {
        status: StatusDefault.SUCCESS,
        message: "MetaMask Connected.",
      };
    } else {
      return {
        status: StatusDefault.ERROR,
        message: "MetaMask Not Found.",
        solution:
          "Please, install the MetaMask chrome extension and try again.",
      };
    }
  };

  return { detectMetamask, connectMetamask, walletId };
};
