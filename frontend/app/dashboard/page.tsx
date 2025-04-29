"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      router.push('/login')
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="mb-6">Welcome to your AI Agent dashboard!</p>
      
      <div className="flex flex-col space-y-4">
        <Link href="/" 
          className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 inline-block w-fit">
          Back to Home
        </Link>
        <button 
          onClick={() => {
            localStorage.removeItem('isLoggedIn')
            router.push('/login')
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 inline-block w-fit">
          Logout
        </button>
      </div>
    </div>
  )
}
