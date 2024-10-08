import React from 'react'
import { Link } from 'react-router-dom'
import { TestLog } from './TestLog'
import { TestOpenLink } from './TestOpenLink'

export const TestDiscordSdkPage: React.FC = () => {
	return (
		<div className='flex flex-col gap-8'>
			<div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
				<TestLog />
				<TestOpenLink />
			</div>
			<Link to='/'>戻る</Link>
		</div>
	)
}
