import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Leaf, Droplets, Sun, Shield } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("st-augustine");

  const sodTypes = [
    {
      id: "st-augustine",
      name: "St. Augustine",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-2_1770843158000_na1fn_Y29tcGFyaXNvbl80X3NvZF90eXBlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTJfMTc3MDg0MzE1ODAwMF9uYTFmbl9ZMjl0Y0dGeWFYTnZibDgwWDNOdlpGOTBlWEJsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l2N2A6Qkh4tCEx-aO8JZIXmSIPXI5NsQN5ZbKFmEhHycfGLzimotJIdQumfkTu66dbPTNKhR1SQtz5XmFI4ZJPhIUj5n55wDrmX51ks94USZtMYCH3~mnFQ9F0-~NOMn95~T2bd5bCFI25twVaaXhFJBoodnFcowaU3eH8qW39bsYaI7FgFiTIHHzmGhdwX2U23~oQBWeHV-gfWN4Qj8YWbUtavl2lc5W~8dBKIdixF7Z2KqvIr2~qzOMltlY3t3CCCeI-lypOAwhoMi4PNonSnzx3Dh6WKW2XnLfGlnzu8CcUulJImIydnA6juwwO554txS-8cAKeL2chcByVkpXA__",
      description: "Wide coarse blades, deep green, carpet-like texture",
      features: ["Lush appearance", "High shade tolerance", "Shorter dormancy period", "Salt-tolerant"],
      climate: "Perfect for Louisiana's warm, humid climate",
      color: "Deep Green",
      texture: "Coarse, Wide Blade",
      shadeToleranceScore: 95,
      wearToleranceScore: 70,
      maintenanceScore: 65,
    },
    {
      id: "bermuda",
      name: "Bermuda",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-2_1770843158000_na1fn_Y29tcGFyaXNvbl80X3NvZF90eXBlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTJfMTc3MDg0MzE1ODAwMF9uYTFmbl9ZMjl0Y0dGeWFYTnZibDgwWDNOdlpGOTBlWEJsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l2N2A6Qkh4tCEx-aO8JZIXmSIPXI5NsQN5ZbKFmEhHycfGLzimotJIdQumfkTu66dbPTNKhR1SQtz5XmFI4ZJPhIUj5n55wDrmX51ks94USZtMYCH3~mnFQ9F0-~NOMn95~T2bd5bCFI25twVaaXhFJBoodnFcowaU3eH8qW39bsYaI7FgFiTIHHzmGhdwX2U23~oQBWeHV-gfWN4Qj8YWbUtavl2lc5W~8dBKIdixF7Z2KqvIr2~qzOMltlY3t3CCCeI-lypOAwhoMi4PNonSnzx3Dh6WKW2XnLfGlnzu8CcUulJImIydnA6juwwO554txS-8cAKeL2chcByVkpXA__",
      description: "Fine narrow blades, light to dark green",
      features: ["High wear tolerance", "High traffic areas", "Excellent durability", "Fast recovery"],
      climate: "Requires more maintenance in humid climates",
      color: "Light to Dark Green",
      texture: "Fine, Narrow Blade",
      shadeToleranceScore: 40,
      wearToleranceScore: 95,
      maintenanceScore: 85,
    },
    {
      id: "zeon-zoysia",
      name: "Zeon Zoysia",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-2_1770843158000_na1fn_Y29tcGFyaXNvbl80X3NvZF90eXBlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTJfMTc3MDg0MzE1ODAwMF9uYTFmbl9ZMjl0Y0dGeWFYTnZibDgwWDNOdlpGOTBlWEJsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l2N2A6Qkh4tCEx-aO8JZIXmSIPXI5NsQN5ZbKFmEhHycfGLzimotJIdQumfkTu66dbPTNKhR1SQtz5XmFI4ZJPhIUj5n55wDrmX51ks94USZtMYCH3~mnFQ9F0-~NOMn95~T2bd5bCFI25twVaaXhFJBoodnFcowaU3eH8qW39bsYaI7FgFiTIHHzmGhdwX2U23~oQBWeHV-gfWN4Qj8YWbUtavl2lc5W~8dBKIdixF7Z2KqvIr2~qzOMltlY3t3CCCeI-lypOAwhoMi4PNonSnzx3Dh6WKW2XnLfGlnzu8CcUulJImIydnA6juwwO554txS-8cAKeL2chcByVkpXA__",
      description: "Ultra-fine soft blades, emerald green, barefoot feel",
      features: ["Premium luxury feel", "Excellent shade tolerance", "High wear tolerance", "Soft texture"],
      climate: "Good for Louisiana but less shade tolerant than St. Augustine",
      color: "Emerald Green",
      texture: "Very Fine, Soft",
      shadeToleranceScore: 75,
      wearToleranceScore: 90,
      maintenanceScore: 70,
    },
    {
      id: "centipede",
      name: "Centipede",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-2_1770843158000_na1fn_Y29tcGFyaXNvbl80X3NvZF90eXBlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTJfMTc3MDg0MzE1ODAwMF9uYTFmbl9ZMjl0Y0dGeWFYTnZibDgwWDNOdlpGOTBlWEJsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l2N2A6Qkh4tCEx-aO8JZIXmSIPXI5NsQN5ZbKFmEhHycfGLzimotJIdQumfkTu66dbPTNKhR1SQtz5XmFI4ZJPhIUj5n55wDrmX51ks94USZtMYCH3~mnFQ9F0-~NOMn95~T2bd5bCFI25twVaaXhFJBoodnFcowaU3eH8qW39bsYaI7FgFiTIHHzmGhdwX2U23~oQBWeHV-gfWN4Qj8YWbUtavl2lc5W~8dBKIdixF7Z2KqvIr2~qzOMltlY3t3CCCeI-lypOAwhoMi4PNonSnzx3Dh6WKW2XnLfGlnzu8CcUulJImIydnA6juwwO554txS-8cAKeL2chcByVkpXA__",
      description: "Medium pointed blades, apple green, low maintenance",
      features: ["Low maintenance", "Acidic soil preference", "Slow recovery", "Budget-friendly"],
      climate: "Less ideal for Louisiana's humid climate",
      color: "Apple Green",
      texture: "Medium, Pointed",
      shadeToleranceScore: 50,
      wearToleranceScore: 45,
      maintenanceScore: 30,
    },
  ];

  const selectedSod = sodTypes.find((sod) => sod.id === activeTab) || sodTypes[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-premium">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Denham Sod</h1>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:(225)205-2022" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">(225) 205-2022</span>
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="accent-label">Premium Sod Installation</p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Transform Your Lawn with <span className="text-primary">St. Augustine Grass</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience the luxury of a lush, vibrant lawn perfectly suited to Louisiana's climate. Denham Sod delivers premium quality sod installation in Denham Springs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Schedule Installation
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-1_1770843157000_na1fn_aGVyb19zdF9hdWd1c3RpbmVfM2Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTFfMTc3MDg0MzE1NzAwMF9uYTFmbl9hR1Z5YjE5emRGOWhkV2QxYzNScGJtVmZNMlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=t8eIXdvM1tZXk3fmajLqbLXQrVXspkWm1l-t1dW9OKEPuo701F4xPluyYh8rH2toG6l8QFTBcva08tNDDtRLpvBCKabuil0ehamQHIB6Mpg2w2k8vcH9SNkGfPNCKC8EuN0bfz2zv3pgMSecsW50DVDqtK2X7lRjf6Vqgc047OpJxtkgVdQmSL8gZWzFbgZgKQzieaslPeDqZhlzNmxcgFnONLRjojtGOEkps48CmlOc9gGZ2wcYL3a-le6Zd1CJWrlAKYEx9qb8CDDvDjZflTlFVvIRntHhvwnVwBFTB8u0SA1YqFDfrHGjKbGolOpCQmsTQ1uOeJw0MoyWg5hOtw__"
                alt="3D St. Augustine Grass"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* St. Augustine Spotlight */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="accent-label mb-4">Why St. Augustine</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Perfect Choice for Louisiana
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              St. Augustine grass is specifically adapted to thrive in Louisiana's warm, humid climate with exceptional shade tolerance and lush appearance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-3d p-8 border-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Heat & Humidity</h3>
              <p className="text-muted-foreground">
                Thrives in Louisiana's warm climate with low tolerance for cold, making it ideal for our region's year-round growing season.
              </p>
            </Card>

            <Card className="card-3d p-8 border-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Shade Tolerance</h3>
              <p className="text-muted-foreground">
                Best shade tolerance among warm-season grasses, perfect for yards with trees and partial shade areas.
              </p>
            </Card>

            <Card className="card-3d p-8 border-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Lush Appearance</h3>
              <p className="text-muted-foreground">
                Stays green longer with shorter dormancy period, providing year-round beauty and carpet-like texture.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Why Louisiana Loves St. Augustine</h3>
                <ul className="space-y-4">
                  {[
                    "Perfectly adapted to Louisiana's USDA Zone 8b climate",
                    "Salt-tolerant for coastal areas",
                    "Tolerates various soil types with good drainage",
                    "Aggressive growth through stolons for quick establishment",
                    "Minimal cold damage during mild Louisiana winters",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-3_1770843158000_na1fn_bG91aXNpYW5hX2xhbmRzY2FwZV9oZXJv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTNfMTc3MDg0MzE1ODAwMF9uYTFmbl9iRzkxYVhOcFlXNWhYMnhoYm1SelkyRndaVjlvWlhKdi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uQqEgaxvgDrzOdi0lmMyeYvopT07fn5yMLeKtsTd7ICNGs5BFZu0LR0UuYpw03U2zdXQzMm5I0r33bbqvId8dEBFWJ15Ts1ShPWH9iNpIl06DG1t~2x-BzMEH8jhvXRvhWF1Oo8M9c9dinq~hHBVj0JjWWKSjnO3vnWGzU7uoJysjan5umpdPwYUvwPm4YSpm3C3rRLQAoGxvTtvXCNBjkrOSELe~A~t31GOfYgL9zaUfVimVN1f-zoCZWCckB9DzGx8TTQMeOwu4qRpv06GsvOIvA9~VSs4rS0PudauLKWfIRUJTWpN5bBAnrhX6M5DO6lx~pKmG~EZsZ6768HTZQ__"
                alt="Louisiana Landscape"
                className="rounded-xl shadow-premium-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sod Comparison */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="accent-label mb-4">Sod Types Comparison</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How St. Augustine Compares
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the visual differences between our four premium sod varieties.
            </p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-premium-lg">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-2_1770843158000_na1fn_Y29tcGFyaXNvbl80X3NvZF90eXBlcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTJfMTc3MDg0MzE1ODAwMF9uYTFmbl9ZMjl0Y0dGeWFYTnZibDgwWDNOdlpGOTBlWEJsY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l2N2A6Qkh4tCEx-aO8JZIXmSIPXI5NsQN5ZbKFmEhHycfGLzimotJIdQumfkTu66dbPTNKhR1SQtz5XmFI4ZJPhIUj5n55wDrmX51ks94USZtMYCH3~mnFQ9F0-~NOMn95~T2bd5bCFI25twVaaXhFJBoodnFcowaU3eH8qW39bsYaI7FgFiTIHHzmGhdwX2U23~oQBWeHV-gfWN4Qj8YWbUtavl2lc5W~8dBKIdixF7Z2KqvIr2~qzOMltlY3t3CCCeI-lypOAwhoMi4PNonSnzx3Dh6WKW2XnLfGlnzu8CcUulJImIydnA6juwwO554txS-8cAKeL2chcByVkpXA__"
              alt="Sod Types Comparison"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {sodTypes.map((sod) => (
              <button
                key={sod.id}
                onClick={() => setActiveTab(sod.id)}
                className={`p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeTab === sod.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/50"
                }`}
              >
                <h4 className="font-bold text-lg text-foreground mb-2">{sod.name}</h4>
                <p className="text-sm text-muted-foreground">{sod.description}</p>
              </button>
            ))}
          </div>

          {/* Detailed Comparison */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
              <div className="space-y-3">
                {selectedSod.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Climate Suitability</p>
                <p className="text-lg font-semibold text-foreground">{selectedSod.climate}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">Shade Tolerance</span>
                    <span className="text-primary font-bold">{selectedSod.shadeToleranceScore}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedSod.shadeToleranceScore}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">Wear Tolerance</span>
                    <span className="text-primary font-bold">{selectedSod.wearToleranceScore}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedSod.wearToleranceScore}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-foreground">Maintenance</span>
                    <span className="text-primary font-bold">{selectedSod.maintenanceScore}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${selectedSod.maintenanceScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Close-up Detail */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-4_1770843151000_na1fn_c3RfYXVndXN0aW5lX2Nsb3NlX3VwXzhr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTRfMTc3MDg0MzE1MTAwMF9uYTFmbl9jM1JmWVhWbmRYTjBhVzVsWDJOc2IzTmxYM1Z3WHpoci5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gC292LPgL--UOzqUJaiMGldBIKF0kJRdT4Wchyr3sKmICqRQfVHLwStTstSfr~asgiRAWW1LlrQGMk6WObB4IdsOKU-9XsaekPvsH8mp~KQ1Vyk6Sm1GDPyZhvIqGNERj79UQG2eauWoT~A5pBmXC3I9YIeLYe7ZDZhw1aHu2afcGb3ve63IT3r13EonDPe-sQufS-kIHHdUqOa7xQUr-xO0LXWQWsdDo8iXR7Kud566AbxiRHsYJRmu3dHoP16XONYmCPqr5OORmVJ69HzDISYuSkoeu9goVj-3CY-bGPVan6H5ia6C0JX-oW85t0SgHE2qFondmJDmk-30qi2ULg__"
              alt="St. Augustine Grass Close-up 8K"
              className="rounded-2xl shadow-premium-lg w-full h-96 object-cover"
            />
            <div className="space-y-6">
              <p className="accent-label">Premium Quality</p>
              <h2 className="text-4xl font-bold text-foreground">
                8K Detail. Premium Quality.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every blade of our St. Augustine grass is selected for premium quality. Our close-up inspection reveals the lush, carpet-like texture that makes St. Augustine the preferred choice for discerning homeowners.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Wide Blade Width</h4>
                    <p className="text-muted-foreground">8-9mm blades create a dense, carpet-like appearance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Coarse Texture</h4>
                    <p className="text-muted-foreground">Distinctive coarse feel underfoot with excellent durability</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Deep Green Color</h4>
                    <p className="text-muted-foreground">Rich, natural green that stays vibrant year-round</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="accent-label mb-4">Professional Service</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Installation Process
            </h2>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-premium-lg">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/gAZKeQQbiauKLsLYJ4Jkna/sandbox/mSXma17bztQA2vqbREbATZ-img-5_1770843157000_na1fn_aW5zdGFsbGF0aW9uX3Byb2Nlc3NfM2Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0FaS2VRUWJpYXVLTHNMWUo0SmtuYS9zYW5kYm94L21TWG1hMTdienRRQTJ2cWJSRWJBVFotaW1nLTVfMTc3MDg0MzE1NzAwMF9uYTFmbl9hVzV6ZEdGc2JHRjBhVzl1WDNCeWIyTmxjM05mTTJRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eF8QvoVB-PEp7H9moAQsX4IS~hEVKgbrjT-w3l7twF5LohvqKmhy46ivjfiiopifiqhJd7jcwfM5NS-dOOc8BmclAfp-JePKXLNGX3Ld7BIx~B6Ve6iOHaWI4z6ElCxP9S7t1Krur7v0TmHaZnrFv3hOOXgSdxWPe7zHrKVMytS6Rq8vQebRSRTgLloCrsGudVd~MVPk08EzUezzyOBr-QsWf4ZEaeXyR7~UT30jcSaR-bLUtah~LqxM-tCKKhWEWYp~9qKyZUuCqD1NSKTjwvsFC-j34fkzFTkZcnktRcQd3xd1RQ9yin~w2drOfxFk1IjcgvjWa3qwCcbguSsUOA__"
              alt="Installation Process"
              className="w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Site Preparation", desc: "We prepare your soil for optimal sod establishment" },
              { step: "2", title: "Soil Testing", desc: "Test and amend soil to ensure perfect pH balance" },
              { step: "3", title: "Professional Installation", desc: "Expert laying of premium St. Augustine sod" },
              { step: "4", title: "Establishment Care", desc: "Proper watering and maintenance guidance" },
            ].map((item, idx) => (
              <Card key={idx} className="card-3d p-8 border-0 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <p className="text-primary-foreground/80 text-lg">Get Your Quote Today</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Transform Your Lawn?
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Contact Denham Sod for a free consultation and quote on premium St. Augustine grass installation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <a
                href="tel:(225)205-2022"
                className="flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-colors"
              >
                <Phone className="w-6 h-6" />
                (225) 205-2022
              </a>
              <a
                href="mailto:Admin@DenhamSod.com"
                className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                Admin@DenhamSod.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 pt-8">
              <MapPin className="w-5 h-5" />
              <span>Denham Springs, Louisiana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <h3 className="font-bold text-lg">Denham Sod</h3>
              </div>
              <p className="text-background/80">Premium sod installation and provider in Denham Springs, Louisiana.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <p>(225) 205-2022</p>
                <p>Admin@DenhamSod.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service Area</h4>
              <p className="text-background/80">Denham Springs, Louisiana and surrounding areas</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2026 Denham Sod. All rights reserved. Premium St. Augustine Grass Installation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
