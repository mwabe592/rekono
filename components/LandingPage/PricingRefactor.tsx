"use client"

import * as React from "react"
import { Check, MoveRight, PhoneCall } from "lucide-react"
import { Tab } from "./ui/pricing-tab"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

const FREQUENCIES = ["monthly", "annually"]

const pricingData = {
  monthly: {
    starter: { price: 29, period: "month" },
    professional: { price: 79, period: "month" },
    enterprise: { price: 199, period: "month" },
  },
  annually: {
    starter: { price: 19, period: "month", originalPrice: 29 },
    professional: { price: 51, period: "month", originalPrice: 79 },
    enterprise: { price: 129, period: "month", originalPrice: 199 },
  },
}

export function RekonoPricing() {
  const [selected, setSelected] = React.useState(FREQUENCIES[0])
  const isAnnual = selected === "annually"
  const currentPricing = pricingData[selected as keyof typeof pricingData]

  return (
    <div className="w-full py-20 lg:py-40 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="bg-primary/10 text-primary border-primary/20">Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter max-w-4xl text-center font-bold text-balance">
              Simple, transparent pricing
            </h2>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Choose the perfect plan for your financial reconciliation needs
            </p>
          </div>

          <div className="flex w-fit rounded-full bg-muted p-1.5 mt-10 shadow-solid-3">
            {FREQUENCIES.map((frequency) => (
              <Tab
                key={frequency}
                text={frequency}
                selected={selected === frequency}
                setSelected={setSelected}
                discount={frequency === "annually"}
              />
            ))}
          </div>

          <div className="grid pt-16 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 lg:gap-10">
            {/* Starter Plan */}
            <Card className="w-full rounded-2xl shadow-solid-5 hover:shadow-solid-7 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Starter</span>
                </CardTitle>
                <CardDescription>
                  Perfect for small businesses getting started with automated reconciliation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">${currentPricing.starter.price}</span>
                    <span className="text-sm text-muted-foreground">/ {currentPricing.starter.period}</span>
                    {isAnnual && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${currentPricing.starter.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Up to 1,000 transactions</p>
                        <p className="text-muted-foreground text-sm">Monthly reconciliation limit</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Basic bank integrations</p>
                        <p className="text-muted-foreground text-sm">Connect up to 3 bank accounts</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Email support</p>
                        <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-4 bg-white/50 border-primary/30 hover:bg-primary/5 transition-all duration-300 h-12"
                    asChild
                  >
                    <Link href="/signup">
                      Get started <MoveRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="w-full shadow-2xl rounded-2xl border-primary/50 ring-2 ring-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <CardHeader className="relative">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Professional
                    <Badge className="ml-2 bg-primary text-primary-foreground shadow-solid-3">Most Popular</Badge>
                  </span>
                </CardTitle>
                <CardDescription>Ideal for growing businesses with complex financial operations</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">${currentPricing.professional.price}</span>
                    <span className="text-sm text-muted-foreground">/ {currentPricing.professional.period}</span>
                    {isAnnual && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${currentPricing.professional.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Up to 10,000 transactions</p>
                        <p className="text-muted-foreground text-sm">Monthly reconciliation limit</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Advanced integrations</p>
                        <p className="text-muted-foreground text-sm">Connect unlimited accounts & QuickBooks</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Priority support</p>
                        <p className="text-muted-foreground text-sm">Live chat & phone support</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Custom reporting</p>
                        <p className="text-muted-foreground text-sm">Advanced analytics & insights</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="gap-4 shadow-solid-5 hover:shadow-solid-7 transition-all duration-300 h-12 bg-[#006bff] hover:bg-[#0056d6] text-white"
                    asChild
                  >
                    <Link href="/signup">
                      Get started <MoveRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="w-full rounded-2xl shadow-solid-5 hover:shadow-solid-7 transition-all duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Enterprise</span>
                </CardTitle>
                <CardDescription>
                  For large organizations requiring custom solutions and dedicated support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">${currentPricing.enterprise.price}</span>
                    <span className="text-sm text-muted-foreground">/ {currentPricing.enterprise.period}</span>
                    {isAnnual && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ${currentPricing.enterprise.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited transactions</p>
                        <p className="text-muted-foreground text-sm">No limits on reconciliation volume</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Custom integrations</p>
                        <p className="text-muted-foreground text-sm">API access & custom connectors</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Dedicated support</p>
                        <p className="text-muted-foreground text-sm">Dedicated account manager</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>White-label options</p>
                        <p className="text-muted-foreground text-sm">Custom branding & deployment</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-4 bg-white/50 border-primary/30 hover:bg-primary/5 transition-all duration-300 h-12"
                    asChild
                  >
                    <Link href="/signin">
                      Book a meeting <PhoneCall className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
