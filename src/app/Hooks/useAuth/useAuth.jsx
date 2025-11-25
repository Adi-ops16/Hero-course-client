import { AuthContext } from '@/Provider/AuthContext'
import React, { use } from 'react'

export default function useAuth() {
    return use(AuthContext)
}
