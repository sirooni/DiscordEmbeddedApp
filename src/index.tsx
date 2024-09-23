import React from 'react'
import ReactDOM from 'react-dom/client'
import { TitlePage } from './pages/title/TitlePage'
import { TestDiscordSdkPage } from './pages/testDiscordSdk/TestDiscordSdkPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Page: React.FC = () => {
	return (
		<BrowserRouter>
			<div className='w-full h-full bg-background p-4 select-none'>
				<Routes>
					<Route path='/' element={<TitlePage />} />
					<Route path='/test-discord-sdk/' element={<TestDiscordSdkPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)
