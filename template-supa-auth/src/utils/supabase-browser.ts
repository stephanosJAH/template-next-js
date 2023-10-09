import type { Database } from '@/types/database'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const createClient = () => createClientComponentClient<Database>()
