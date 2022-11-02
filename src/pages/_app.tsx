import '../styles/index.css'
import '../styles/header.css'
import '../styles/projects.css'
import '../styles/form.css'
import '../styles/donate.css'
import '../styles/stages.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import Header from '@/components/Header'; 
import Toolbar from '@/components/Toolbar'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<Web3Provider>
				<div className="relative flex items-top justify-center sm:items-center sm:pt-0 min-h-screen font-ar 
				bg-gradient-to-br from-solar-100  to-lunar-100
				dark:bg-gradient-to-br dark:from-lunar-900 dark:to-lunar-600  ">
					<Header/>
					{/*<Toolbar/>*/}
					<Component {...pageProps} />
					<ThemeSwitcher className="fixed bottom-6 right-6"/>
				</div>
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
