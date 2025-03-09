"use client"

import { useState, useEffect } from 'react'
import { getContactMessages, updateContactMessageStatus, type ContactMessage } from '@/lib/database'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMessages()
  }, [])

  async function loadMessages() {
    try {
      const data = await getContactMessages()
      setMessages(data)
    } catch (error) {
      toast.error('Failed to load messages')
    } finally {
      setLoading(false)
    }
  }

  async function handleStatusUpdate(id: string, status: ContactMessage['status']) {
    try {
      await updateContactMessageStatus(id, status)
      toast.success('Status updated successfully')
      loadMessages()
    } catch (error) {
      toast.error('Failed to update status')
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <p className="text-gray-500">Manage and respond to contact form submissions</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id}>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell className="max-w-md truncate">{message.message}</TableCell>
              <TableCell>
                <Badge variant={
                  message.status === 'new' ? 'default' :
                  message.status === 'read' ? 'secondary' :
                  'outline'
                }>
                  {message.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {message.status === 'new' && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusUpdate(message.id, 'read')}
                    >
                      Mark as Read
                    </Button>
                  )}
                  {message.status === 'read' && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusUpdate(message.id, 'replied')}
                    >
                      Mark as Replied
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 