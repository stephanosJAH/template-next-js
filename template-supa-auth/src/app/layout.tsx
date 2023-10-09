import './globals.css'
import type { Metadata } from 'next'

import SupabaseAuthProvider from '@/components/providers/supabase-auth-provider'
import SupabaseProvider from '@/components/providers/supabase-provider'
import { UINextUIProvider } from '@/components/providers/next-ui-provider'
import { createClient } from '@/utils/supabase-server'

import Sidebar from '@/components/navegation/sidebar'
import Footer from '@/components/navegation/footer'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const supabase = createClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	return (
		<html lang='en'>
			<body className='bg-white'>
				<SupabaseProvider>
					<SupabaseAuthProvider serverSession={session}>
						<UINextUIProvider>
							<Sidebar />
							<main className='flex min-h-screen flex-col items-center justify-between ml-64 lg:pl-6 lg:flex lg:flex-col lg:w-75% p-4'>
								{children}
							</main>
							<Footer />
						</UINextUIProvider>
					</SupabaseAuthProvider>
				</SupabaseProvider>
			</body>
		</html>
	)
}
