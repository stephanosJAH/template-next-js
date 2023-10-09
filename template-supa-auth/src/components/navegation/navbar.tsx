'use client'

import { useAuth } from '../providers/supabase-auth-provider'

export default function Navbar() {
	const { user } = useAuth()
	return (
		<nav className='lg:ml-64 bg-red-100 h-14 border-b border-second'>
			<div className='flex justify-end items-center px-9 py-1 h-14'>
				<div className='ml-1 flex flex-row justify-center items-center gap-2'>
					<span>{user?.name ?? 'Sin nombre'}</span>
					<img
						className='rounded-full w-10 h-10 object-contain mr-4'
						src={user?.avatar_url ?? ''}
						alt='@shadcn'
					/>
				</div>
				<div></div>
			</div>
		</nav>
	)
}
