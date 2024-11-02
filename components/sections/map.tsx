"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { lat: -1.2921, lng: 36.8219, name: "Nairobi Hub" }, // Kenya
  { lat: -6.7924, lng: 39.2083, name: "Dar es Salaam Hub" }, // Tanzania
  { lat: 0.3476, lng: 32.5825, name: "Kampala Hub" }, // Uganda
  { lat: -3.3731, lng: 29.9189, name: "Bujumbura Hub" }, // Burundi
  { lat: -1.9403, lng: 29.8739, name: "Kigali Hub" }, // Rwanda
];

export function MapSection() {
  return (
    <section id="map" className="container py-12 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Our Locations
        </h2>
        <p className="mt-4 text-muted-foreground">
          Find AI hubs across East Africa
        </p>
      </motion.div>
      <Card className="mt-12 overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-[16/9] sm:aspect-[2/1] w-full bg-muted">
          <div className="w-full h-full bg-[url('/map-background.svg')] bg-cover bg-center relative p-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="absolute cursor-pointer"
                style={{
                  left: `${((location.lng + 180) * 100) / 360}%`,
                  top: `${((location.lat * -1 + 90) * 100) / 180}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2 group">
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/30 transition-colors duration-300" />
                  <MapPin className="h-8 w-8 text-primary relative z-10 drop-shadow-md" />
                  <motion.div
                    className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 
                             px-3 py-1.5 rounded-md text-sm font-medium shadow-lg border border-border/50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {location.name}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
