"use client"

import { ArrowRight, CheckCircle, Droplets, Flame, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import ImageCarousel from "@/components/ImageCarousel"
import { useTranslation } from '@/lib/translation-context'

// Generate array of image paths
const heroImages = Array.from({ length: 20 }, (_, i) => `/image${i + 1}.jpg`)

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {t('welcome')}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t('mainDescription')}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  {t('viewServices')}
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  {t('contact')}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[550px] h-[310px] relative">
                <img
                  src="/image1.jpg"
                  alt="Hero"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {t('areas')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('services')}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t('expertiseDescription')}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-0">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Droplets className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>{t('sanitary')}</CardTitle>
                <CardDescription>
                  {t('sanitaryDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('precise')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('water')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('code')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-0">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                  <Flame className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>{t('sprinkler')}</CardTitle>
                <CardDescription>
                  {t('sprinklerDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('nfpa')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('hydraulic')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('technical')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-0">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>{t('consultation')}</CardTitle>
                <CardDescription>
                  {t('consultationDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('technical')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('regulatory')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('engineering')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {t('advantages')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('whyChooseUs')}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t('engineeringExcellenceDescription')}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-10 w-10 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t('revit')}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t('revitDescription')}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-10 w-10 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t('engineering')}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t('experienceDescription')}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-10 w-10 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t('technical')}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t('technicalDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {t('projects')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('portfolio')}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t('portfolioDescription')}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('metropolitan')}</CardTitle>
                <CardDescription>{t('healthcare')} | 250,000 {t('sqft')}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt={t('metropolitan')}
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                  height="225"
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop"
                  width="400"
                />
                <p className="text-gray-500 dark:text-gray-400">
                  {t('metropolitanDescription')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('skyline')}</CardTitle>
                <CardDescription>{t('commercial')} | 45 {t('floors')}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt={t('skyline')}
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                  height="225"
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop"
                  width="400"
                />
                <p className="text-gray-500 dark:text-gray-400">
                  {t('skylineDescription')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('international')}</CardTitle>
                <CardDescription>{t('aviation')} | 1.2M {t('sqft')}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt={t('international')}
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                  height="225"
                  src="https://images.unsplash.com/photo-1543967708-4fa115e0f15f?q=80&w=800&auto=format&fit=crop"
                  width="400"
                />
                <p className="text-gray-500 dark:text-gray-400">
                  {t('internationalDescription')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('educational')}</CardTitle>
                <CardDescription>{t('education')} | 15 {t('buildings')}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt={t('educational')}
                  className="mb-4 aspect-video w-full rounded-lg object-cover"
                  height="225"
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                  width="400"
                />
                <p className="text-gray-500 dark:text-gray-400">
                  {t('educationalDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-900">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('cta')}
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('ctaDescription')}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              {t('contact')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {t('viewServices')}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {t('getInTouch')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('contact')}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t('contactDescription')}
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('portfolio')}</h2>
          <p className="text-lg text-center text-gray-300 mb-12">{t('portfolioDescription')}</p>
          <div className="max-w-3xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>
    </div>
  )
}