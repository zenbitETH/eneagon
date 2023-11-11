import '../styles/index.css'
import '../styles/header.css'
import Header from '@/components/Header'; 



const App = ({ Component, pageProps }) => {
	return (
		<div className="relative flex items-top justify-center sm:items-center sm:pt-0 min-h-screen font-exo
		bg-gradient-to-br from-lunar-900 to-lunar-600  ">
			<Header/>
			<Component {...pageProps} />
		</div>		
	)
}

export default App
