import React from 'react'
import { Button } from './ui/button'
import { ChevronRight, Star } from 'lucide-react'

export default function Hero() {
    return (
        <div className='h-[80vh] text-center items-center content-center space-y-4'>
            <h1 className='text-6xl font-bold'>Welcome to NextStarter</h1>
            <p className='text-xl font-medium'>A starter project for Next.js with TypeScript, ESLint, Prettier, and more.</p>
            <div className='flex gap-2 py-2 justify-center items-center content-center'>
                <Button >Get Started
                    <ChevronRight className='h-4 w-4' />
                </Button>
                <Button variant="secondary"><Star className='h-4 w-4' /> Star on github</Button>
            </div>
        </div>
    )
}
