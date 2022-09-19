import { useTheme } from 'next-themes'
import { APP_NAME, polygonTestnet } from '@/utils/consts'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultProvider } from 'ethers';

const { chains } = configureChains(
	[polygonTestnet, chain.polygonMumbai],
	[
		jsonRpcProvider({
			rpc: (chain) => {
				if (chain.id !== polygonTestnet.id) return null;
				return {
					http: "https://matic-mumbai.chainstacklabs.com",
				};
			},
		}),
		publicProvider(),
	],
	{ pollingInterval: 10_000 }
);

const { connectors } = getDefaultWallets({
	appName: "Bright Forest",
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
