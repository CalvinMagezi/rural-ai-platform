"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, Laptop, TreePine } from "lucide-react"
import { motion } from "framer-motion"

const metrics = [
  {
    title: "Communities Served",
    value: "150+",
    description: "Rural communities across East Africa",
    icon: Users,
  },
  {
    title: "Tech Hubs",
    value: "25",
    description: "Local innovation centers",
    icon: Building2,
  },
  {
    title: "Active Users",
    value: "10,000+",
    description: "Monthly active platform users",
    icon: Laptop,
  },
  {
    title: "Environmental Impact",
    value: "30%",
    description: "Reduction in resource waste",
    icon: TreePine,
  },
]

export function MetricsSection() {
  return (
    <section id="metrics" className="bg-muted/50">
      <div className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Impact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Measuring our contribution to rural development
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.title}
                  </CardTitle>
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}