import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hello } from './pages/Hello'

const Page: FC<{}> = () => {
	return (
		<div className='bg-slate-500'>
			<Hello />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Hello />)
