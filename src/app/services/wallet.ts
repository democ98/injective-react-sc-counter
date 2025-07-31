import { WalletStrategy } from "@injectivelabs/wallet-strategy";
import { CosmosWalletStrategy } from "@injectivelabs/wallet-cosmos";
import { Web3Exception } from "@injectivelabs/exceptions";
import { Wallet } from "@injectivelabs/wallet-base";
import {
  CHAIN_ID,
  ETHEREUM_CHAIN_ID,
  alchemyRpcEndpoint,
} from "../utils/constants";

export const walletStrategy = new WalletStrategy({
  chainId: CHAIN_ID,
  ethereumOptions: {
    ethereumChainId: ETHEREUM_CHAIN_ID,
    rpcUrl: alchemyRpcEndpoint,
  },
  strategies: {
    [Wallet.Keplr]: new CosmosWalletStrategy({
      chainId: CHAIN_ID,
      wallet: Wallet.Keplr,
    }),
  },
});

export const getAddresses = async (): Promise<string[]> => {
  const addresses = await walletStrategy.getAddresses();

  if (addresses.length === 0) {
    throw new Web3Exception(
      new Error("There are no addresses linked in this wallet.")
    );
  }

  return addresses;
};
