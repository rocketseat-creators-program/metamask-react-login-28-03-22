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

    if (provider) {
      setDetectMetamask(true);

      // TODO: Verificar Network
      const validNetwork =
        (await switchNetwork().catch(({ message }) => ({
          status: StatusDefault.ERROR,
          message,
        }))) === null;
      /**
       * -32603: Unrecognized chain ID
       * 4001: User rejected the request
       *
       */

      // TODO: Network errada: solicita a troca (switchEthereumChain)
      // Network certa: conectar (eth_requestAccounts)
      if (validNetwork) {
        const connectResponse = await ethereum.current
          ?.request<string[]>({ method: "eth_requestAccounts" })
          .catch(({ message }) => ({
            status: StatusDefault.ERROR,
            message: message,
            solution: "Please, contact our support.",
          }));
        // Get wallet ID
        const currentWallet =
          typeof connectResponse === "string"
            ? connectResponse
            : (connectResponse as string[]).shift();
        setWalletId(currentWallet);
        console.log("walletId", currentWallet);
        // TODO: Set connected
      }

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
