import React from 'react'
import { MenuIcon, UserIcon } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import MainMenuButton from './MainMenuButton'
import { MainMenu } from './MainMenu'

export default function Appbar() {
    console.log('server component')
    return (
        <header className='flex justify-between items-center border-t sm:border-b border-border sm:shadow-sm sm:shadow-primary max-sm:shadow-[0px_-1px_2px_0px_#ed8936] w-full px-4 py-2 fixed bottom-0 left-0 right-0 sm:static'>
            <MainMenu />
            <div className='flex items-center gap-3'>
                <ModeToggle />
                <span>
                    User 1
                </span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size={'icon'} variant={'ghost'}>
                            <UserIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href={'/profile'}>
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Info
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}