'use client'

import Link from 'next/link'

import { useAuth } from '../providers/supabase-auth-provider'
import ButtonSingout from '@/components/ui/button-singout'

export default function Sidebar() {
	const { user } = useAuth()

	return (
		<div
			id='sideNav'
			className='z-10 lg:block w-64 h-screen fixed rounded-none border-none'
		>
			<div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
				<div className='fixed flex flex-col top-0 left-0 w-64 h-full border-r'>
					<div className='flex items-center justify-center h-14'>
						<div>SG</div>
					</div>
					<div className='overflow-y-auto overflow-x-hidden flex-grow'>
						<ul className='flex flex-col py-4 space-y-1'>
							<li className='px-5'>
								<div className='flex flex-row items-center h-8'>
									<div className='text-sm font-light tracking-wide text-gray-500'>
										Menu
									</div>
								</div>
							</li>
							<li>
								<Link
									href='/'
									className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
								>
									<span className='inline-flex justify-center items-center ml-4'>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
											></path>
										</svg>
									</span>
									<span className='ml-2 text-sm tracking-wide truncate'>
										Inicio
									</span>
								</Link>
							</li>
							<li>
								<Link
									href='/expedientes/create'
									className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
								>
									<span className='inline-flex justify-center items-center ml-4'>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
											></path>
										</svg>
									</span>
									<span className='ml-2 text-sm tracking-wide truncate'>
										Expedientes
									</span>
									<span className='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full'>
										New
									</span>
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'
								>
									<span className='inline-flex justify-center items-center ml-4'>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
											></path>
										</svg>
									</span>
									<span className='ml-2 text-sm tracking-wide truncate'>
										Notifications
									</span>
									<span className='px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full'>
										1.2k
									</span>
								</Link>
							</li>
							<li></li>
						</ul>
					</div>
					<div className='flex justify-between items-center border-t border-slate-300 p-2 h-14'>
						<div className='flex justify-center items-center text-slate space-x-2'>
							<div>
								<img
									className='rounded-full w-10 h-10 object-contain mr-4'
									src={user?.avatar_url ?? ''}
									alt='@shadcn'
								/>
							</div>
							<div className='flex justify-start flex-col items-start text-slate-500 font-semibold'>
								<p className='cursor-pointer text-sm leading-5'>
									{user?.name ?? ''}
								</p>
								<small className='cursor-pointer text-xs leading-3 text-gray-300 text-slate-700'>
									{user?.email ?? ''}
								</small>
							</div>
							<div>
								<ButtonSingout />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
