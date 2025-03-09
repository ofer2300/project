"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Mail, 
  Image, 
  Settings,
  LogOut,
  Wrench
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const links = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/messages', label: 'Messages', icon: Mail },
    { href: '/admin/projects', label: 'Projects', icon: Image },
    { href: '/admin/services', label: 'Services', icon: Wrench },
    { href: '/admin/profile', label: 'Profile', icon: Settings },
  ]

  return (
    <div className="w-64 bg-gray-900 text-white p-6">
      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          )
        })}
        <button
          onClick={handleSignOut}
          className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-red-400"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </nav>
    </div>
  )
} 