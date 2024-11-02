"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2213&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:max-w-4xl text-center bg-background/40 backdrop-blur-sm p-8 rounded-2xl"
        >
          <h1 className="font-display text-4xl font-bold tracking-tighter text-primary sm:text-6xl lg:text-7xl [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            <span className="sr-only">Rural AI Access Platform - </span>Bringing
            AI Solutions to Rural East Africa
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl sm:text-2xl tracking-tight text-primary">
            <p className="[text-shadow:_0_1px_1px_rgb(0_0_0_/_10%)]">
              Empowering rural communities with accessible AI technology and
              training.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Find a Hub Near You
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto backdrop-blur-sm"
            >
              Become a Partner
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
