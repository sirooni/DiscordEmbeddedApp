import React from 'react'

type Props = {
	src: string
	title: string
	description: string
	link: string
}

export const GameCard: FC<Props> = ({ src, title, description, link }) => {
	return (
		<div className='border-[2px] border-main rounded-md bg-foreground hover:bg-accent cursor-pointer p-4 flex gap-10'>
			<img
				src={src}
				width='128px'
				height='128px'
				className='flex-none bg-gray-100'
			/>
			<div className='text-main flex flex-col gap-4'>
				<p className='text-xl'>{title}</p>
				<p className='text-sm whitespace-pre-wrap'>{description}</p>
			</div>
		</div>
	)
}
