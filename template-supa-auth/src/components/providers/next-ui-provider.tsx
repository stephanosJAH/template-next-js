'use client'

import { NextUIProvider } from '@nextui-org/react'

export function UINextUIProvider({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>
}
