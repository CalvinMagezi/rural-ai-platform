"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, BookOpen, Video, FileText } from "lucide-react"
import { motion } from "framer-motion"

const resources = [
  {
    title: "AI Tools Package",
    description: "Download our offline-capable AI tools",
    icon: Download,
    action: "Download Now",
  },
  {
    title: "Training Materials",
    description: "Access comprehensive learning resources",
    icon: BookOpen,
    action: "View Materials",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guidance videos",
    icon: Video,
    action: "Watch Videos",
  },
  {
    title: "Documentation",
    description: "Read detailed technical documentation",
    icon: FileText,
    action: "Read Docs",
  },
]

export function ResourceSection() {
  return (
    <section id="resources" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Resource Center
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to get started
        </p>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <resource.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button className="w-full">{resource.action}</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}