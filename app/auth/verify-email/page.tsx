"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from 'lucide-react'

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Check your email</CardTitle>
          <CardDescription className="text-center">
            We sent you a verification link. Please check your email and click the link to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-gray-500">
            <p>Didn&apos;t receive the email?</p>
            <p>Check your spam folder or</p>
            <p>Contact support if you&apos;re having trouble.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href="/auth/signin"
            className="w-full text-center text-sm text-blue-600 hover:text-blue-500"
          >
            Back to Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
} 