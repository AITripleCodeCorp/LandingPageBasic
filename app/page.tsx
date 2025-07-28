"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Globe, Users, Mail, Award, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// App Store and Google Play icons as SVG components
const AppStoreIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const GooglePlayIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
)

export default function LandingPage() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger initial animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
      },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [statsVisible])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Expense Tracker: TravelBalance",
      description:
        "A comprehensive travel expense tracking app that allows users to monitor all their travel costs by country in real-time. Perfect for travelers who want to stay on budget and track their spending habits while exploring the world.",
      type: "Mobile App",
      technologies: ["Flutter", "Django", "Python"],
      image: "/projects-logos/travel.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/expense-tracker-travelbalance/id6549954832?platform=iphone",
        googlePlay: "https://play.google.com/store/apps/details?id=com.TravelBalance&hl=pl",
      },
    },
    {
      id: 2,
      title: "Organista: Interaktywna Nauka",
      description:
        "An interactive mobile learning app designed for Polish users who want to become organists. The app provides comprehensive practice tools, lessons, and interactive features to master organ playing techniques and music theory.",
      type: "Educational App",
      technologies: ["Flutter"],
      image: "/projects-logos/organist.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/organista-interaktywna-nauka/id6742075235?platform=iphone",
        googlePlay: "https://play.google.com/store/apps/details?id=com.domainname.Organist&hl=pl",
      },
    },
    {
      id: 3,
      title: "Guide AI: Landmark Scanner",
      description:
        "An AI-powered sightseeing companion that transforms your travel experience. Simply point your camera at any monument or landmark to receive detailed information and historical context from your virtual AI guide.",
      type: "AI Mobile App",
      technologies: ["Flutter", ".NET", "C#", "AI"],
      image: "/projects-logos/monument.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/guide-ai-landmark-scanner/id6744541300?platform=iphone",
        googlePlay: null,
      },
    },
    {
      id: 4,
      title: "Nature Scanner: AI Identifier",
      description:
        "Discover the natural world around you with AI-powered identification. Take photos of flowers, animals, landscapes, and more to instantly learn about nature's wonders with detailed descriptions and fascinating facts.",
      type: "AI Mobile App",
      technologies: ["Flutter", ".NET", "C#", "AI"],
      image: "/projects-logos/nature.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/nature-scanner-ai-identifier/id6745711918?platform=iphone",
        googlePlay: null,
      },
    },
    {
      id: 5,
      title: "Car Scanner: AI Identifier",
      description:
        "Discover details about any car by scanning its image. Recognize make, model, year, specs, and more using AI-powered detection.",
      type: "AI Mobile App",
      technologies: ["Flutter", ".NET", "C#", "AI"],
      image: "/projects-logos/car.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/car-scanner-ai-identifier/id6744433158?platform=iphone",
        googlePlay: null,
      },
    },
    {
      id: 6,
      title: "Doctor of Juridical Science Website",
      description:
        "A website for a Doctor of Juridical Science, featuring editable content, news updates, and a contact form powered by a headless CMS.",
      type: "Website",
      technologies: ["Angular", "Headless CMS"],
      image: "/projects-logos/law.jpg",
      links: {
        appStore: null,
        googlePlay: null,
        website: "https://jonaszkita.pl/",
      },
    },
    {
      id: 7,
      title: "Twelve Testers: Android Beta Testing",
      description:
        "Accelerate your Android app testing and deployment process with Twelve Testers. Designed for developers, it helps you meet Play Store testing requirements, gather real user feedback, and connect with a community of testers—delivering stress-free, efficient, and collaborative app testing.",
      type: "Developer Tool",
      technologies: ["Flutter", ".NET", "C#"],
      image: "/projects-logos/testers.jpg",
      links: {
        appStore: null,
        googlePlay: "https://play.google.com/store/apps/details?id=com.domainname.TwelveTesters",
      },
    },
    {
      id: 8,
      title: "Learn Coding: CodeFlashcards",
      description:
        "Master programming faster, smarter, and more efficiently with Learn Coding: CodeFlashcards – the intelligent flashcard app designed for aspiring and experienced developers. Whether you're starting with Python or diving deep into Docker, it helps you retain what matters and learn coding your way.",
      type: "Educational App",
      technologies: ["Flutter"],
      image: "/projects-logos/codeflashcard.jpg",
      links: {
        appStore: "https://apps.apple.com/pl/app/learn-coding-codeflashcards/id6742793072?platform=iphone",
        googlePlay: "https://play.google.com/store/apps/details?id=com.domainname.ProgrammingFlashcards",
      },
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const features = [
    {
      title: 'Cross-Platform Development',
      description: 'We build once — it runs on both iOS and Android. Flutter and React Native let us deliver fast, efficient, and consistent mobile apps across platforms.'
    },
    {
      title: 'In-App Purchases & Subscriptions',
      description: 'Monetize your app with one-time payments or auto-renewing subscriptions. We support Apple App Store and Google Play Billing integration.'
    },
    {
      title: 'Real-Time Chat & Notifications',
      description: 'Enable direct communication with real-time messaging, group chats, media sharing, and push notifications to keep users engaged and informed.'
    },
    {
      title: 'Location & Maps',
      description: 'Real-time geolocation, live user tracking, route planning, and Google/Apple Maps integration — perfect for logistics, delivery, or social features.'
    },
    {
      title: 'User Authentication',
      description: 'Secure and smooth login options: email, phone, Google, Apple, or Facebook. We also support 2FA for enhanced security.'
    },
    {
      title: 'Offline Support & Sync',
      description: 'Your app works even without a connection. Data is saved locally and synced automatically once the device is back online.'
    },
    {
      title: 'Analytics & Crash Reporting',
      description: 'Gain insights into user behavior and app performance. We integrate with Firebase, Sentry, and Mixpanel to track usage and detect issues in real time.'
    },
    {
      title: 'Admin Panel / CMS',
      description: 'Manage your app’s content, users, and features from a web-based dashboard. Custom-built or integrated with existing CMS solutions.'
    },
    {
      title: 'AI Integrations',
      description: 'Boost your app with AI features like chatbots, smart content generation, and recommendation systems — tailored to your business.'
    },
    {
      title: 'Custom Animations & Modern UI',
      description: 'We create sleek, responsive interfaces with modern animations and intuitive design — delivering a smooth and memorable user experience.'
    },
    {
      title: 'Payment Integrations',
      description: 'Accept payments with Stripe, PayPal, Przelewy24, Apple Pay, and Google Pay — fast, secure, and user-friendly.'
    },
    {
      title: 'Multi-language Support',
      description: 'Expand your reach with localization. We build apps that support multiple languages and adapt to regional settings automatically.'
    },
    {
      title: 'Secure Architecture',
      description: 'We follow best practices in app security: encrypted data, secure APIs, authentication protocols, and GDPR compliance.'
    },
    {
      title: 'Scalable Backend & APIs',
      description: 'We build reliable and scalable backends using Firebase, Supabase, Node.js, or Django — with REST or GraphQL APIs as needed.'
    },
  ];

  const toggleFeature = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies and frameworks",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business needs",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consulting",
      description: "Technical consulting and architecture planning for complex projects",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 pt-8 pb-4 px-4 transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="container mx-auto flex justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-8">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer"
              >
                TwinCodeCorp
              </a>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#capabilities"
                onClick={(e) => handleSmoothScroll(e, "capabilities")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer"
              >
                Features
              </a>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer"
              >
                Services
              </a>
              <Link
                href="https://www.linkedin.com/company/twincodecorp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden w-full max-w-sm">
            {/* Always visible header bar */}
            <div className="bg-white rounded-full px-6 py-4 shadow-lg border border-gray-100 flex items-center justify-between">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, "hero")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer font-medium"
              >
                TwinCodeCorp
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Separate expandable menu below */}
            <div
              className={`mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "max-h-48 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="py-2">
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "projects")}
                  className={`block px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 text-base font-medium cursor-pointer transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "100ms" : "0ms",
                  }}
                >
                  Projects
                </a>
                <a
                  href="#capabilities"
                  onClick={(e) => handleSmoothScroll(e, "capabilities")}
                  className={`block px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 text-base font-medium cursor-pointer transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "200ms" : "0ms",
                  }}
                >
                  Features
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className={`block px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 text-base font-medium cursor-pointer transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "300ms" : "0ms",
                  }}
                >
                  Services
                </a>
                <Link
                  href="https://www.linkedin.com/company/twincodecorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 text-base font-medium transform ${
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
                  }}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-32 px-4">
        <div className="container mx-auto text-center max-w-5xl">
          <div
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              10+ Years of Experience
            </Badge>
          </div>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            TwinCodeCorp
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            We turn ideas into scalable solutions
          </p>
          <p
            className={`text-lg text-gray-500 mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Transforming businesses through innovative technology solutions. From concept to deployment, we deliver
            exceptional software that drives growth and success.
          </p>
        </div>
      </section>

      {/* Projects Section */}

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 pb-16 border-b border-gray-100">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-out delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Our Projects
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-400 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Discover some of our recent work and the innovative solutions we've built for our clients
            </p>
          </div>

          <div className="space-y-20 flex flex-col items-center">
            {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                data-index={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 transition-all duration-700 ease-out ${
                  visibleProjects.has(index) || showAllProjects
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={128}
                    height={128}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="flex-1 space-y-6 max-w-lg">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {project.type}
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.appStore && (
                      <Button asChild>
                        <Link href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                          <AppStoreIcon />
                          App Store
                        </Link>
                      </Button>
                    )}
                    {project.links.googlePlay && (
                      <Button variant="outline" asChild>
                        <Link href={project.links.googlePlay} target="_blank" rel="noopener noreferrer">
                          <GooglePlayIcon />
                          Google Play
                        </Link>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button variant="outline" asChild>
                        <Link href={project.links.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Website
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {projects.length > 3 && (
              <div className="text-center">
                <Button
                  onClick={() => setShowAllProjects(prev => !prev)}
                  variant="outline"
                  className="mt-6"
                >
                  {showAllProjects ? 'Show Less Projects' : 'Show More Projects'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities Accordion Section */}
      <section id="capabilities" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Features We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential functionalities built into our apps — crafted for performance, scalability, and user satisfaction.
            </p>
          </div>
          <div className="space-y-4">
            {(showAllFeatures ? features : features.slice(0, 4)).map((feature, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </span>
                  <span className="text-gray-500">
                    {openIndex === index ? '-' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="py-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            {features.length > 4 && (
              <div className="text-center">
                <Button
                  onClick={() => setShowAllFeatures(prev => !prev)}
                  variant="outline"
                  className="mt-6"
                >
                  {showAllFeatures ? 'Show Less Features' : 'Show More Features'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4 text-gray-900">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUpNumber target={20} suffix="+" isVisible={statsVisible} />
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUpNumber target={10} suffix="+" isVisible={statsVisible} />
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUpNumber target={10} suffix="+" isVisible={statsVisible} />
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <CountUpNumber target={24} isVisible={statsVisible} />
                <span>/</span>
                <CountUpNumber target={7} isVisible={statsVisible} />
              </div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your ideas to life
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="max-w-md mx-auto">
              <div className="text-center">
                <Mail className="h-8 w-8 text-gray-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <Link
                  href="mailto:contact@twincodecorp.com"
                  className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                >
                  contact@twincodecorp.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">TwinCodeCorp</div>
            <p className="text-gray-400 mb-4 max-w-md mx-auto">
              Transforming ideas into scalable solutions with cutting-edge technology and innovative approaches.
            </p>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TwinCodeCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CountUpNumber({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 800 // Changed from 1500 to 800ms for faster animation
    const steps = 60 // 60 steps for smooth animation
    const increment = target / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const newCount = Math.min(Math.round(increment * currentStep), target)
      setCount(newCount)

      if (currentStep >= steps) {
        clearInterval(timer)
        setCount(target) // Ensure we end at exact target
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, isVisible])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
