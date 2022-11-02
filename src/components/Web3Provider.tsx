import { useTheme } from 'next-themes'
import { APP_NAME, polygonTestnet } from '@/utils/consts'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { ConnectKitProvider } from 'connectkit'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultProvider } from 'ethers';

const { chains } = configureChains(
	[chain.polygonMumbai, chain.optimismGoerli],
	[
		jsonRpcProvider({
			rpc: (chain) => {
				if (chain.id == 80001) 
				return {
					http: "https://matic-mumbai.chainstacklabs.com",
				};
				else if (chain.id == 420) 
				return {
					http: "https://goerli.optimism.io",
				};
				else return null;
			},
		}),
		publicProvider(),
	],
	{ pollingInterval: 10_000 }
);

const { connectors } = getDefaultWallets({
	appName: "Eneagon",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider: getDefaultProvider(),
});

const Web3Provider = ({ children }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
