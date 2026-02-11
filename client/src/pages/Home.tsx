import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Leaf, Zap, Shield, Award } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Premium 3D Aesthetic
 * - Extreme whitespace with strategic forest green and warm gold accents
 * - 3D isometric elements as primary visual language
 * - Precision typography with Playfair Display (headings), Poppins (body), Montserrat (accents)
 * - Asymmetric grid with staggered sections and diagonal dividers
 * - Smooth parallax scrolling and subtle depth effects
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    sqft: "",
    sodType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        sqft: "",
        sodType: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-crisp-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-forest-green" />
            <span className="font-display text-2xl text-forest-green">
              Denham Sod
            </span>
          </div>
          <a
            href="tel:225-205-2022"
            className="flex items-center gap-2 text-forest-green hover:text-warm-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-accent font-semibold">225-205-2022</span>
          </a>
        </div>
      </nav>

      {/* Hero Section with 3D Grass Patch */}
      <section className="relative overflow-hidden bg-gradient-to-b from-off-white via-crisp-white to-off-white pt-20 pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <h1 className="text-forest-green leading-tight">
                  Premium Sod Installation & Supply
                </h1>
                <p className="text-lg text-dark-slate leading-relaxed">
                  Experience the beauty of a lush, thriving lawn with same-day
                  fresh-cut local sod. We guarantee root establishment and a
                  beautiful lawn—or your money back.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-accent font-bold text-forest-green mb-1">
                      Free Delivery
                    </h3>
                    <p className="text-dark-slate">
                      When you choose the Denham Sod Squad for installation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-accent font-bold text-forest-green mb-1">
                      Money-Back Guarantee
                    </h3>
                    <p className="text-dark-slate">
                      Root establishment guaranteed or we'll fix it at no cost
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-accent font-bold text-forest-green mb-1">
                      Same-Day Fresh Cut
                    </h3>
                    <p className="text-dark-slate">
                      Local sod cut fresh daily for maximum vitality
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-forest-green hover:bg-forest-green/90 text-crisp-white font-accent font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("quote-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get Your Free Quote
                </Button>
              </div>
            </div>

            {/* Right: 3D Grass Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-warm-gold/10 rounded-3xl" />
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/6ItVkBUoQVzTfb4sF9udLM-img-1_1770845404000_na1fn_aGVyby1ncmFzcy0zZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94LzZJdFZrQlVvUVZ6VGZiNHNGOXVkTE0taW1nLTFfMTc3MDg0NTQwNDAwMF9uYTFmbl9hR1Z5YnkxbmNtRnpjeTB6WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=p0LJLzu-0Qa4pFaTy0mBKNZ2QKZmedcjIKcY9nh8L5JSdJOcJup5FkQqnzEEOm4pKqhT-6Qg8-g7-IZPX42MdmrTu5-y-Lp1oGgme~NDq42k2Nngp3wvgxJevl~ACCMyfHF5WcsA87Ae~WVvIZZrhM7aZ1dNIO9e4noJQ07WNKAaaP2oSaHsYZB1ROsFati7TsA95O~8lObNpY09S3wV-C51Rdd7d75bYP2bUTQ1M6S43JgxlndxZ3wh1g2wvPkPVtttY4oAeuWAAnGmmelfj18O5v8Bx~qf~k-ex0alBx-SYvkpiJvxBwHpFguRPABN71C7tz2GwArIB8sUPG5G5Q__"
                alt="Premium 3D Grass Sod"
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-crisp-white" />
      </section>

      {/* Sod Types Section */}
      <section className="py-24 bg-crisp-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-forest-green mb-4">Our Sod Varieties</h2>
            <p className="text-lg text-dark-slate max-w-2xl mx-auto">
              Choose the perfect sod type for your Louisiana lawn. Each variety
              is optimized for our climate and soil conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* St. Augustine */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/6ItVkBUoQVzTfb4sF9udLM-img-2_1770845395000_na1fn_c3QtYXVndXN0aW5lLXNvZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94LzZJdFZrQlVvUVZ6VGZiNHNGOXVkTE0taW1nLTJfMTc3MDg0NTM5NTAwMF9uYTFmbl9jM1F0WVhWbmRYTjBhVzVsTFhOdlpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vfwO47e3vDi50GJY55v69du6KjqOJJCH-m-8nNElo3lr869ImgCVbMkz515WD~oHObOxRtJuBCjsIm9SduuR0Pc5lGXW16d2QRuPx~IafAdqg-dos1uCNUf8MdRONFJoJ9CayLBNcqTW~htAJwLvKpfCKKWAUFjdmuH~~xwgUuaiAunh7qUd98O8BF1Om8Hsjq6b1Ggmby2p2LZHeYr~1QndblAWLwz0ooZiCZE5h1p-y~DLFLc3mIFghoX~dsRzhkrLo4aHebbmqLR7ZUsRmenEtnPMobeWa2PRVcI5Srb~HpPPeXyoVbC0oZ8C2CCZWfXisDescByKa9RsBC7M6Q__"
                  alt="St. Augustine Sod"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-forest-green">St. Augustine</h3>
                <div className="space-y-2 text-sm text-dark-slate">
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Best for:
                    </span>{" "}
                    Shady yards & lush look
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Texture:
                    </span>{" "}
                    Coarse, wide blade
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Shade Tolerance:
                    </span>{" "}
                    Excellent
                  </p>
                </div>
              </div>
            </Card>

            {/* Bermuda */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/6ItVkBUoQVzTfb4sF9udLM-img-3_1770845399000_na1fn_YmVybXVkYS1zb2Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94LzZJdFZrQlVvUVZ6VGZiNHNGOXVkTE0taW1nLTNfMTc3MDg0NTM5OTAwMF9uYTFmbl9ZbVZ5YlhWa1lTMXpiMlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NzhtRZOMkLhxkCXF7aiWzp6yyawK8TFEv8xhRxEAprpkOA6IF2rYnTRyTbSRdQBLPe4zzsKkw-iGIpQAhEWOsCNcMQAZXvMV2yXFJvVyKv6JmQ3OB7krgJdP~DW4xxwEX1MxvoJWnkE4WmSBA3utqVWB1e95k68UrYOGSjsphI0HSnDqT2717UXOXyD61fkqyqP5gjtnizG6JhE7kAgAbCTkQPP2YDQshz8LiKveUegNqaSijbcv~CA3j8qaPYzbAhjm2kTdqvjDlgxmT7GPagJ-SkcSDnq8lC0MDVYLW1xB1XLjI4gLFW3zR7cg0vB~4MsiAO-G06KQgQxDTS2Eww__"
                  alt="Bermuda Sod"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-forest-green">Bermuda</h3>
                <div className="space-y-2 text-sm text-dark-slate">
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Best for:
                    </span>{" "}
                    High traffic & sports
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Texture:
                    </span>{" "}
                    Fine, narrow blade
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Wear Tolerance:
                    </span>{" "}
                    High
                  </p>
                </div>
              </div>
            </Card>

            {/* Zeon Zoysia */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/6ItVkBUoQVzTfb4sF9udLM-img-4_1770845397000_na1fn_emVvbi16b3lzaWEtc29k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94LzZJdFZrQlVvUVZ6VGZiNHNGOXVkTE0taW1nLTRfMTc3MDg0NTM5NzAwMF9uYTFmbl9lbVZ2YmkxNmIzbHphV0V0YzI5ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=m7SdCyflv2VA6Uhu8vlIUz8Z26WkeKGo6tiP8k0tTIzyue3CiHv7DTistgjMTuJqb0wousl0dcICys-F9bs7hHjkdDPMfojwJGVqSlHgi2l0fJ1U8dcfuZ6QpK1n5vfO8wPOYi9Wzn9glu3zIXOa~kpa09bJrSCMCUlxrMDf0u1itZYxaQ4Nn4dhQL-UWPnjOjKTPWrHFb9sg5lNvZyutD8nfNxSRmQrVJyh4Dc62W40VIAHPNiyHfgldckJ~3lJhfzj3uT1ZYVdVXnDSH~jFd4NetOctNhJUloc6z8p2TIuYo8wO-lfXNCz92zzHMAbwTmFySkOE1waILJMqUjl4Q__"
                  alt="Zeon Zoysia Sod"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-forest-green">Zeon Zoysia</h3>
                <div className="space-y-2 text-sm text-dark-slate">
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Best for:
                    </span>{" "}
                    Premium barefoot feel
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Texture:
                    </span>{" "}
                    Very fine, soft blade
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Color:
                    </span>{" "}
                    Emerald green
                  </p>
                </div>
              </div>
            </Card>

            {/* Centipede */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/mpTk3nmTocy6dpWApLm2rj/sandbox/6ItVkBUoQVzTfb4sF9udLM-img-5_1770845402000_na1fn_Y2VudGlwZWRlLXNvZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbXBUazNubVRvY3k2ZHBXQXBMbTJyai9zYW5kYm94LzZJdFZrQlVvUVZ6VGZiNHNGOXVkTE0taW1nLTVfMTc3MDg0NTQwMjAwMF9uYTFmbl9ZMlZ1ZEdsd1pXUmxMWE52WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FW3u9JP4V8P47SmKk0xTljyzh3Xn46u6Zwf1Wx22JbI-AkQGIPbeb3WBU0Rhqe0pr60RSeWqrwu18zxWM41jumGTtXpbT6i6mUgl12cQocHjQYlIpMvgPU7Q-r7ddG6vMl3lW4Ygunx92LzEFTltYbUozB3z192kHS4Pwx87yV5RknubZGUbngXRpiw1rxIQTE~chvTrdIifvAkackGjEw6~wJhEr3Izw0lQJod9wZilkPN9V6KNOKMzSndKrio0vAmwcCRUXtx7fUyqmoPBZrQ2xGax9kiH8ocbO~Xh8qXwz-74fLGNCka0B4BUj~Wc9Klg1Cxvsd~J-5N08gEFpw__"
                  alt="Centipede Sod"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-forest-green">Centipede</h3>
                <div className="space-y-2 text-sm text-dark-slate">
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Best for:
                    </span>{" "}
                    Low maintenance
                  </p>
                  <p>
                    <span className="font-accent font-semibold text-forest-green">
                      Texture:
                    </span>{" "}
                    Medium, pointed blade
                  </p>
                  <p>
                     <span className="font-accent font-semibold text-forest-green">
                      Maintenance:
                    </span>{" "}
                    Low
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Denham Sod Section */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-forest-green">Why Choose Denham Sod</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-warm-gold pl-6 py-2">
                  <h3 className="text-xl font-accent font-bold text-forest-green mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-dark-slate">
                    Based in Denham Springs, Louisiana, we understand the unique
                    climate and soil conditions of South Louisiana.
                  </p>
                </div>

                <div className="border-l-4 border-warm-gold pl-6 py-2">
                  <h3 className="text-xl font-accent font-bold text-forest-green mb-2">
                    Same-Day Fresh Cut
                  </h3>
                  <p className="text-dark-slate">
                    Our sod is cut fresh daily, ensuring maximum vitality and
                    root establishment.
                  </p>
                </div>

                <div className="border-l-4 border-warm-gold pl-6 py-2">
                  <h3 className="text-xl font-accent font-bold text-forest-green mb-2">
                    Professional Installation
                  </h3>
                  <p className="text-dark-slate">
                    The Denham Sod Squad provides expert installation with
                    attention to detail and quality.
                  </p>
                </div>

                <div className="border-l-4 border-warm-gold pl-6 py-2">
                  <h3 className="text-xl font-accent font-bold text-forest-green mb-2">
                    Guaranteed Results
                  </h3>
                  <p className="text-dark-slate">
                    We guarantee root establishment and lawn beauty—or we'll
                    make it right at no cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-forest-green/10 to-warm-gold/10 rounded-2xl p-12 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-display text-forest-green">
                  Serving Denham Springs & Surrounding Areas
                </h3>
                <p className="text-dark-slate leading-relaxed">
                  We take pride in delivering premium sod and installation
                  services to create beautiful, thriving lawns throughout South
                  Louisiana.
                </p>
              </div>

              <div className="pt-6 border-t border-warm-gold/30">
                <p className="text-sm text-dark-slate mb-4">
                  <span className="font-accent font-bold text-forest-green">
                    Ready to transform your lawn?
                  </span>
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:225-205-2022"
                    className="flex items-center gap-3 text-forest-green hover:text-warm-gold transition-colors font-accent font-bold"
                  >
                    <Phone className="w-5 h-5" />
                    225-205-2022
                  </a>
                  <div className="flex items-start gap-3 text-dark-slate">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-warm-gold" />
                    <span>Denham Springs, Louisiana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section id="quote-form" className="py-24 bg-crisp-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-forest-green mb-4">Get Your Free Quote</h2>
            <p className="text-lg text-dark-slate">
              Fill out the form below and we'll contact you with a personalized
              quote for your lawn project.
            </p>
          </div>

          <Card className="p-8 border-0 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-display text-forest-green">
                  Thank You!
                </h3>
                <p className="text-dark-slate">
                  We've received your quote request. Our team will contact you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-forest-green">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-forest-green focus:ring-forest-green"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-forest-green">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-forest-green focus:ring-forest-green"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-forest-green">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-forest-green focus:ring-forest-green"
                      placeholder="(225) 555-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-forest-green">
                      Address *
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-forest-green focus:ring-forest-green"
                      placeholder="Your address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sqft" className="text-forest-green">
                      Lawn Size (sq ft) *
                    </Label>
                    <Input
                      id="sqft"
                      name="sqft"
                      type="number"
                      value={formData.sqft}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-forest-green focus:ring-forest-green"
                      placeholder="e.g., 5000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sodType" className="text-forest-green">
                      Preferred Sod Type *
                    </Label>
                    <select
                      id="sodType"
                      name="sodType"
                      value={formData.sodType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green bg-crisp-white text-dark-slate"
                    >
                      <option value="">Select a type</option>
                      <option value="st-augustine">St. Augustine</option>
                      <option value="bermuda">Bermuda</option>
                      <option value="zeon-zoysia">Zeon Zoysia</option>
                      <option value="centipede">Centipede</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-forest-green">
                    Additional Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-border focus:border-forest-green focus:ring-forest-green min-h-32"
                    placeholder="Tell us about your project, any specific concerns, or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-forest-green hover:bg-forest-green/90 text-crisp-white font-accent font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Request Your Free Quote
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours to discuss your lawn project
                  and provide a personalized quote.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-crisp-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                <span className="font-display text-xl">Denham Sod</span>
              </div>
              <p className="text-crisp-white/80">
                Premium sod installation and supply for South Louisiana.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-accent font-bold">Contact</h4>
              <div className="space-y-2 text-crisp-white/80">
                <a
                  href="tel:225-205-2022"
                  className="flex items-center gap-2 hover:text-warm-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  225-205-2022
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Denham Springs, Louisiana</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-accent font-bold">Our Promise</h4>
              <p className="text-crisp-white/80 text-sm">
                Root establishment guaranteed. Beautiful lush lawn or your money
                back.
              </p>
            </div>
          </div>

          <div className="border-t border-crisp-white/20 pt-8 text-center text-crisp-white/60 text-sm">
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
