'use client'

import type { User } from '@/types/collections'
import type { Session } from '@supabase/supabase-js'

import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect } from 'react'
// import useSWR from 'swr'
import { useSupabase } from './supabase-provider'

interface ContextI {
	user: User | null | undefined
	// error: any
	// isLoading: boolean
	// mutate: any
	signOut: () => Promise<void>
	signInWithGithub: () => Promise<void>
	// signInWithEmail: (email: string, password: string) => Promise<string | null>
}

const Context = createContext<ContextI>({
	user: null,
	// error: null,
	// isLoading: true,
	// mutate: null,
	signOut: async () => {},
	signInWithGithub: async () => {},
	// signInWithEmail: async (email: string, password: string) => null,
})

export default function SupabaseAuthProvider({
	serverSession,
	children,
}: {
	serverSession?: Session | null
	children: React.ReactNode
}) {
	const { supabase } = useSupabase()
	const router = useRouter()

	// console.log(serverSession?.user?.user_metadata)

	// ACA TENEMOS QUE ARMAR CADA USER DEPENDIENDO DEL PROVIDER
	// Get USER
	const userSession = {
		id: serverSession?.user?.user_metadata.provider_id,
		name: serverSession?.user?.user_metadata.full_name,
		email: serverSession?.user?.user_metadata.email,
		avatar_url: serverSession?.user?.user_metadata.avatar_url,
		created_at: 'date()',
	}

	// const {
	// 	data: user,
	// 	error,
	// 	isLoading,
	// 	mutate,
	// } = useSWR(serverSession !== null ? 'profile-context' : null, getUser)

	// Sign Out
	const signOut = async () => {
		await supabase.auth.signOut()
		router.push('/login')
	}

	// Sign-In with Github
	const signInWithGithub = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: 'http://localhost:3000/auth/callback',
			},
		})
	}

	// // Sign-In with Email
	// const signInWithEmail = async (email: string, password: string) => {
	// 	const { error } = await supabase.auth.signInWithPassword({
	// 		email,
	// 		password,
	// 	})

	// 	if (error !== null) {
	// 		return error.message
	// 	}

	// 	return null
	// }

	// Refresh the Page to Sync Server and Client
	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (session?.access_token !== serverSession?.access_token) {
				router.refresh()
			}
		})
		return () => {
			subscription.unsubscribe()
		}
	}, [router, supabase, serverSession?.access_token])

	const exposed: ContextI = {
		user: userSession,
		// error,
		// isLoading,
		// mutate,
		signOut,
		signInWithGithub,
		// signInWithEmail,
	}

	return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useAuth = () => {
	const context = useContext(Context)
	if (context === undefined) {
		throw new Error('useAuth must be used inside SupabaseAuthProvider')
	} else {
		return context
	}
}
