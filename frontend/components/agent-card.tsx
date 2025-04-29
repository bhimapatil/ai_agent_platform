import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

type AgentCardProps = {
  id: string
  name: string
  description: string
  imageUrl: string
  capabilities: string[]
}

export function AgentCard({ id, name, description, imageUrl, capabilities }: AgentCardProps) {
  return (
    <Link href="/login" className="block transition-all hover:scale-105">
      <Card className="h-full overflow-hidden bg-gray-900 border-gray-700">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="bg-black border-b border-gray-800">
          <CardTitle className="text-gray-100">{name}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="bg-gray-900">
          <div className="flex flex-wrap gap-2 pt-4">
            {capabilities.map((capability, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-200 border border-gray-700"
              >
                {capability}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-sm text-gray-400 bg-gray-900">
          Click to use this agent
        </CardFooter>
      </Card>
    </Link>
  )
}
