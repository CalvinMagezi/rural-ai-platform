"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Wifi, Users, BookOpen, Smartphone, Cloud } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "Offline AI Capabilities",
    description: "Access AI tools without constant internet connectivity",
    icon: Wifi,
  },
  {
    title: "Mobile-First Solutions",
    description: "Optimized for smartphones and low-bandwidth environments",
    icon: Smartphone,
  },
  {
    title: "Community Hubs",
    description: "Local tech centers providing resources and support",
    icon: Users,
  },
  {
    title: "Training Programs",
    description: "Comprehensive education in AI technologies",
    icon: BookOpen,
  },
  {
    title: "Edge Computing",
    description: "Process data locally for faster response times",
    icon: Cpu,
  },
  {
    title: "Cloud Integration",
    description: "Seamless sync when connectivity is available",
    icon: Cloud,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Empowering Features
        </h2>
        <p className="mt-4 text-muted-foreground">
          Designed for reliability in challenging environments
        </p>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}