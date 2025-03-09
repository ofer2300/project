"use client"

import { useState, useEffect } from 'react'
import { getServices, createService, type Service } from '@/lib/database'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'
import { Card, CardContent } from "@/components/ui/card"
import { Plus, X } from 'lucide-react'

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    features: ['']
  })

  useEffect(() => {
    loadServices()
  }, [])

  async function loadServices() {
    try {
      const data = await getServices()
      setServices(data)
    } catch (error) {
      toast.error('Failed to load services')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      await createService({
        ...formData,
        features: formData.features.filter(f => f.trim() !== '')
      })

      toast.success('Service created successfully')
      setFormData({
        title: '',
        description: '',
        icon: '',
        features: ['']
      })
      loadServices()
    } catch (error) {
      toast.error('Failed to create service')
    }
  }

  function addFeature() {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }))
  }

  function removeFeature(index: number) {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  function updateFeature(index: number, value: string) {
    setFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }))
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="text-gray-500">Manage your service offerings</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <Input
          placeholder="Service Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <Textarea
          placeholder="Service Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <Input
          placeholder="Icon Name (e.g., 'droplets', 'flame')"
          value={formData.icon}
          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          required
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Features</label>
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <Input
                placeholder="Feature"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                required
              />
              {formData.features.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFeature(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addFeature}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Feature
          </Button>
        </div>

        <Button type="submit">Create Service</Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Features:</h4>
                <ul className="list-disc list-inside text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 