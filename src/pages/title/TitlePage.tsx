import React from 'react'
import { GameCard } from './GameCard'

export const TitlePage: React.FC = () => {
	return (
		<div className='flex flex-col gap-8 justify-center items-center'>
			<h1 className='text-2xl font-bold text-main'>ゲーム置き場</h1>
			<div className='w-5/6 gap-8 grid grid-cols-1 lg:grid-cols-2'>
				<GameCard
					src=''
					title='タイトル'
					description='なんか説明文とか書くところ'
				/>
			</div>
		</div>
	)
}
