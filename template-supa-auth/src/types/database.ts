export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export interface Database {
	public: {
		Tables: {
			files: {
				Row: {
					id: string
					code: string
					name: string
					descripcion: string
					last_moved: string
					judicial_department: string
					judicial_seat: string
					user_id: string
					user_assign: string
					created_at: string
				}
				Insert: {
					id?: string
					code: string
					name: string
					descripcion: string
					last_moved: string
					judicial_department: string
					judicial_seat: string
					user_id: string
					user_assign: string
				}
				Update: {
					code?: string
					name?: string
					descripcion?: string
					last_moved?: string
					judicial_department?: string
					judicial_seat?: string
					user_id?: string
					user_assign?: string
				}
				Relationships: [
					{
						foreignKeyName: 'files_user_id_fkey'
						columns: ['user_id']
						referencedRelation: 'users'
						referencedColumns: ['id']
					},
				]
			}
			users: {
				Row: {
					id: string
					name: string
					email: string
					avatar_url: string
					created_at: string
				}
				Insert: {
					id: string
					name: string
					email: string
					avatar_url?: string
					created_at?: string
				}
				Update: {
					name?: string
					email: string
					avatar_url?: string
				}
				Relationships: [
					{
						foreignKeyName: 'users_id_fkey'
						columns: ['id']
						referencedRelation: 'users'
						referencedColumns: ['id']
					},
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}
