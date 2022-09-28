export const APP_NAME = 'zenbit.eth'


export const polygonTestnet = {
    id: 80001,
    name: "Polygon Testnet",
    network: "Polygon Mumbai",
    iconBackground: "#fff",
    nativeCurrency: {
      decimals: 18,
      name: "Matic",
      symbol: "MATIC",
    },
    rpcUrls: {
      default: "https://matic-mumbai.chainstacklabs.com",
    },
    blockExplorers: {
      default: {
        name: "Polygonscan",
        url: "https://mumbai.polygonscan.com/",
      },
    },
    testnet: true,
};
  