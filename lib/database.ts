import { supabase } from './supabase'

export type Project = {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  completion_date: string
  created_at: string
  updated_at: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  created_at: string
  updated_at: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  status: 'new' | 'read' | 'replied'
  created_at: string
  updated_at: string
}

// Projects
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as Project[]
}

export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .select()
    .single()
  
  if (error) throw error
  return data as Project
}

// Services
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: true })
  
  if (error) throw error
  return data as Service[]
}

export async function createService(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('services')
    .insert(service)
    .select()
    .single()
  
  if (error) throw error
  return data as Service
}

// Contact Messages
export async function createContactMessage(message: Omit<ContactMessage, 'id' | 'status' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert(message)
    .select()
    .single()
  
  if (error) throw error
  return data as ContactMessage
}

export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as ContactMessage[]
}

export async function updateContactMessageStatus(id: string, status: ContactMessage['status']) {
  const { data, error } = await supabase
    .from('contact_messages')
    .update({ status })
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  return data as ContactMessage
} 