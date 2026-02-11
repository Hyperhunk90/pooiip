import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Shovel, Trash2, Truck, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Design Philosophy: Premium Minimalist with Warm Earthy Aesthetic
 * - Photorealistic grass imagery as hero content
 * - Warm, earthy color palette with premium touches
 * - Large, immersive imagery with minimal text overlay
 * - Organic shapes and flowing layouts
 * - Full-bleed hero image with floating text
 * - Organic curved dividers between sections
 * - Image-first design with text integration
 * - High-resolution 4K grass close-ups with 3D depth
 * - Circular and organic shaped image frames
 * - Soft drop shadows and subtle blur effects
 * - Smooth scroll-triggered reveals and fade-in animations
 */

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
}

export default function Services() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which items are in view
      const newVisibleItems = new Set<number>();
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            newVisibleItems.add(index);
          }
        }
      });
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: ServiceItem[] = [
    {
      title: "Professional Sod Installation",
      description:
        "Expert installation by the Denham Sod Squad ensures proper root establishment and immediate lawn transformation.",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/bmJhu0Z9pq9eLvKrdRG1aF-img-2_1770846083000_na1fn_c2VydmljZS1zb2QtaW5zdGFsbGF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94L2JtSmh1MFo5cHE5ZUx2S3JkUkcxYUYtaW1nLTJfMTc3MDg0NjA4MzAwMF9uYTFmbl9jMlZ5ZG1salpTMXpiMlF0YVc1emRHRnNiR0YwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HdbVqzKf2mYCWneWKAHdJUHD7-m-06FDNTXOlLSeP8nLwzHxknWgnjt0qkQoYTw311AldywFVji5f04Ml8Z94ZJCaaWvJxV3x24YVcydio8ui7nmb1P~nIP5wD6dL3JL5Ty4DkNhhbhf~DzaT845Iy~L3vaqStrKFAMu-NrhWcZbJM3rI7Tgfy96tEYGz6TmWCRjcx9FhG6R-Rwbkded~FdTihgRe7vKSXrWwzLnDHbmbpvp11aYOj6-g340JSbG~-EMqsYNEgdKjwRb-6vxs5KYlZd2zjOTu2Hwsdnk0D2AQNADrpRx86ISgDWQzBxDxtqQ67qpELgED6V55C7bJA__",
      features: [
        "Proper soil preparation",
        "Expert seaming techniques",
        "Immediate watering protocol",
        "Root establishment guarantee",
      ],
      icon: <Leaf className="w-8 h-8 text-terracotta" />,
    },
    {
      title: "Lawn Preparation & Leveling",
      description:
        "We prepare your lawn for success with professional grading, soil amendment, and precise leveling.",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/bmJhu0Z9pq9eLvKrdRG1aF-img-3_1770846088000_na1fn_c2VydmljZS1sYXduLXByZXBhcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94L2JtSmh1MFo5cHE5ZUx2S3JkUkcxYUYtaW1nLTNfMTc3MDg0NjA4ODAwMF9uYTFmbl9jMlZ5ZG1salpTMXNZWGR1TFhCeVpYQmhjbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WrQ9XcdhtYwOgQeJGkI-frSbaFuuni0JesCLRER4lirMzcwrTgYQCHaqStQyFgeKDnSbJWz-7kYsEMbvSLP9tRdZq6FkF98pWKrF6M1JYoSUURDb-Ll6Gy8CSEEdCT~9YokKEUyukHrPIpg~Hf1xVrKlRjYyyaHX3T72hGw1h4dqHwfykKQ0b8QlATWQRLiE9ibgLLYfuoihywllOVfun60JcAw2f-1x~oJgksDPweJ0H79PLJLBraqm8DPvqGVmuQUt37SO45yflm0heKhW8961Mn64k7lNJ1kQ8SquNvA~0eX-JV6W6sgwiwHYIi55Nij8Ncure-fYUPThHurvvQ__",
      features: [
        "Soil testing & analysis",
        "Grade adjustment",
        "Debris removal",
        "Nutrient amendment",
      ],
      icon: <Shovel className="w-8 h-8 text-terracotta" />,
    },
    {
      title: "Grass & Sod Removal",
      description:
        "Complete removal of old grass and debris, preparing your yard for fresh sod installation.",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/bmJhu0Z9pq9eLvKrdRG1aF-img-4_1770846086000_na1fn_c2VydmljZS1ncmFzcy1yZW1vdmFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94L2JtSmh1MFo5cHE5ZUx2S3JkUkcxYUYtaW1nLTRfMTc3MDg0NjA4NjAwMF9uYTFmbl9jMlZ5ZG1salpTMW5jbUZ6Y3kxeVpXMXZkbUZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rxY72StGpwsodtZV71WMPbPSFK6gIw74LG6bzl~rETrnGYV1Oc6Kk87P1NmCEhuoYKcF9b~clMkWgseDWpN-JNz1iRTu~A5julfVp2tAqtbQbtMXZf891I60KhmE0nc5z6WHwW0t7l2R9pOnAq7RxPjoW3PUZLz2VOdzU-dkp5P5pT1CEp5KXK831mkFqVjjxB-vJnp2c0yFoQ6gGi1i453nCt-uXt2My9PA9EVtf46XZjf~8kZtcbYzQ5q1NE4Azq0GU8v8wR2ZkCIfs-~3SCoYaimpkWZ6b5-MyhuFigavvyXaufhmQ0Y5JkvZzUJEeTZ7BCYmsXON6ZYiKI-yzQ__",
      features: [
        "Mechanical removal",
        "Debris hauling",
        "Site cleanup",
        "Soil preparation",
      ],
      icon: <Trash2 className="w-8 h-8 text-terracotta" />,
    },
    {
      title: "Sod Delivery Service",
      description:
        "Same-day fresh-cut sod delivery directly from our fields to your property.",
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/bmJhu0Z9pq9eLvKrdRG1aF-img-5_1770846085000_na1fn_c2VydmljZS1zb2QtZGVsaXZlcnk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94L2JtSmh1MFo5cHE5ZUx2S3JkUkcxYUYtaW1nLTVfMTc3MDg0NjA4NTAwMF9uYTFmbl9jMlZ5ZG1salpTMXpiMlF0WkdWc2FYWmxjbmsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BH6vl46WsTmRJT2TTvm1j1-UZPckwkECQArQHtFOBEBm86Q6058IG~OZf0ecFQGkoRQvnx4J5LSW3PmA-vOmC6jfTXzM9vTuCqbyslFs04s5X7bLiBZX2TK4RjCZ1bTKp0q2~K04o0yw3dGsMD4izMNb2MGB4Wwt9fgvlVB9b1oavJs~IHanNjIQe1VG-D1WRmbUZO0GAtEJMSZq3dnFDAZnkmMejm5FU7b9Ryt7Ir6vACy2Nkdy5bnObNera7Wer19JbQL1oHKMUqBIDAWZKLmD59nJ9G~UMpDcs8ETbPO24WgObO5OQajxmelrQzEZmV5HWDWKs7N557a-RIP0LQ__",
      features: [
        "Same-day delivery",
        "Free delivery with installation",
        "Fresh-cut sod daily",
        "Professional unloading",
      ],
      icon: <Truck className="w-8 h-8 text-terracotta" />,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EBE0D1" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <Leaf className="w-8 h-8" style={{ color: "#7BA882" }} />
            <span
              className="font-display text-2xl"
              style={{ color: "#7BA882" }}
            >
              Denham Sod
            </span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium transition-colors"
              style={{ color: "#5D4E37" }}
            >
              Home
            </a>
            <a
              href="tel:225-205-2022"
              className="flex items-center gap-2 font-accent font-semibold transition-colors"
              style={{ color: "#C89968" }}
            >
              225-205-2022
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/bmJhu0Z9pq9eLvKrdRG1aF-img-1_1770846087000_na1fn_c2VydmljZXMtaGVyby1ncmFzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94L2JtSmh1MFo5cHE5ZUx2S3JkUkcxYUYtaW1nLTFfMTc3MDg0NjA4NzAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhR1Z5YnkxbmNtRnpjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sS3IRsTbWvG7UuMWjrHyi7rzz0i5hDUMbspGF3bel4GwRSbLos72ROj7c7HTPzMcnzUaWs3NX9wxvOEcY~Pr5ofP6qbP4Lphzb~FU65Bn4tcBDCD7wfT0kUuh8xgYz1BjbQvj~sUnfnKRu15zTpL8-rHIUeDlOK0GThqwfZHowEr3~8z~Nq5rMpnCglE8uTHf0s8Wj5nX9Xfy9LIVth~AQeZOXo4Fwc~68f8wBzaFLsqCY0L9vJbme~dvn5BnZMIJA5kJkHxpQbxfZyb4j4T~wPilWTfZDA8MZt2vCqrWXB7XNdlll8B9LFlZqQcyEkEJ-qJ88B~o~-qfF0smXhpTA__')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4">
            <h1
              className="text-6xl md:text-7xl font-display font-bold"
              style={{ letterSpacing: "0.03em" }}
            >
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
              Complete lawn transformation from preparation to installation
            </p>
          </div>
        </div>
      </section>

      {/* Organic Divider */}
      <svg
        className="w-full h-24 -mt-1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="#EBE0D1"
        />
      </svg>

      {/* Services Grid */}
      <section className="py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              style={{ color: "#5D4E37" }}
            >
              Complete Lawn Solutions
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#7BA882" }}
            >
              From preparation to installation, we handle every step of
              transforming your outdoor space.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  flexDirection: index % 2 === 1 ? "row-reverse" : "row",
                }}
              >
                {/* Image */}
                <div className="relative group">
                  <div
                    className="relative overflow-hidden rounded-3xl shadow-2xl aspect-square"
                    style={{
                      boxShadow:
                        "0 20px 50px rgba(93, 78, 55, 0.15), 0 0 0 1px rgba(123, 168, 130, 0.1)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: "#F5E6D3" }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3
                        className="text-4xl font-display font-bold mb-4"
                        style={{ color: "#5D4E37" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#7BA882" }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p
                      className="font-accent font-semibold text-sm"
                      style={{ color: "#C89968" }}
                    >
                      WHAT'S INCLUDED
                    </p>
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: "#7BA882" }}
                        />
                        <span style={{ color: "#5D4E37" }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="font-accent font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                      backgroundColor: "#C89968",
                      color: "#FFFFFF",
                    }}
                    onClick={() => {
                      window.location.href = "/#quote-form";
                    }}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Divider */}
      <svg
        className="w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 Q300,120 600,70 T1200,70 L1200,0 L0,0 Z"
          fill="#EBE0D1"
        />
      </svg>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4" style={{ backgroundColor: "#EBE0D1" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              style={{ color: "#5D4E37" }}
            >
              Why Denham Sod
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Fresh Cut",
                desc: "Sod cut fresh daily for maximum vitality and root establishment",
              },
              {
                title: "Free Delivery",
                desc: "When you choose the Denham Sod Squad for installation",
              },
              {
                title: "Money-Back Guarantee",
                desc: "Root establishment guaranteed or we'll fix it at no cost",
              },
              {
                title: "Local Expertise",
                desc: "20+ years serving Denham Springs with professional service",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 border-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow:
                    "0 10px 30px rgba(93, 78, 55, 0.08), 0 0 0 1px rgba(123, 168, 130, 0.1)",
                }}
              >
                <h3
                  className="text-2xl font-display font-bold mb-3"
                  style={{ color: "#7BA882" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#5D4E37" }}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container max-w-3xl text-center space-y-8">
          <h2
            className="text-5xl md:text-6xl font-display font-bold"
            style={{ color: "#5D4E37" }}
          >
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl" style={{ color: "#7BA882" }}>
            Contact us today for a free consultation and quote on your lawn
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-accent font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                backgroundColor: "#7BA882",
                color: "#FFFFFF",
              }}
              onClick={() => {
                window.location.href = "/#quote-form";
              }}
            >
              Get Your Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-accent font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300"
              style={{
                borderColor: "#C89968",
                color: "#C89968",
              }}
              onClick={() => {
                window.location.href = "tel:225-205-2022";
              }}
            >
              Call 225-205-2022
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4"
        style={{
          backgroundColor: "#5D4E37",
          color: "#FFFFFF",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                <span className="font-display text-xl">Denham Sod</span>
              </div>
              <p className="opacity-80">
                Premium sod installation and supply for South Louisiana.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-accent font-bold">Services</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Sod Installation</p>
                <p>Lawn Preparation</p>
                <p>Grass Removal</p>
                <p>Sod Delivery</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-accent font-bold">Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Phone: 225-205-2022</p>
                <p>Denham Springs, Louisiana</p>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-8 text-center text-sm opacity-60"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <p>
              &copy; {new Date().getFullYear()} Denham Sod. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
