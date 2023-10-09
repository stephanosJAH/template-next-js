import { type Database } from './database'

type FilesEntity = Database['public']['Tables']['files']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Files = FilesEntity & {
	user: FilesEntity
}

export type User = UserEntity
