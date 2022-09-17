import '../styles/index.css'
import '../styles/header.css'
import '../styles/projects.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import Header from '@/components/Header'; 
import ThemeSwitcher from '@/components/ThemeSwitcher'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<Web3Provider>
				<div className="relative flex items-top justify-center min-h-screen font-ar bg-gradient-to-br from-color2-500 to-color1-500 sm:items-center sm:pt-0">
					<Header/>
					<Component {...pageProps} />
					<ThemeSwitcher className="absolute bottom-6 right-6"/>
				</div>
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
