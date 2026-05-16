import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Toaster, toast } from "sonner";
import {
  Calendar,
  Loader2,
  MessageSquare,
  Clock,
  Globe,
  Scissors,
  Stethoscope,
  Home as HomeIcon,
  HeartPulse,
  Dumbbell,
  GraduationCap,
  Wrench,
  Car,
  UtensilsCrossed,
  Scale,
  Briefcase,
  Hotel,
  ShoppingCart,
  Truck,
  DollarSign,
  PawPrint,
  Camera,
  BookOpen,
  CheckCircle2,
  Zap,
  Users,
  Shield,
  Languages,
  Settings,
  Cpu,
  Smartphone,
} from "lucide-react";
import { Chatbot } from "./components/Chatbot";

const EMAILJS_SERVICE_ID = "service_0y3aflo";
const EMAILJS_TEMPLATE_ID = "template_rmqnuio";
const EMAILJS_PUBLIC_KEY = "leispS6sWeuD-JK-A";
const CALENDLY_URL = "https://calendly.com/mharshitaripaka2026/new-meeting";

function App() {
  const websiteBullets = [
    "Business websites powered by AI",
    "Landing pages built to convert",
    "Booking and appointment platforms",
    "E-commerce and service storefronts",
    "Client portals and dashboards",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    country: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".animate-reveal").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToInquiry = () => {
    document.getElementById("inquiry-form").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBookCall = () => {
    document.getElementById("book-call").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      business_name: formData.businessName,
      country: formData.country,
      service: formData.service,
      message: formData.message,
    };
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      toast.success("Thank you! Your inquiry has been submitted successfully.");
      setFormData({ name: "", email: "", phone: "", businessName: "", country: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again or email us directly at hello@dreambsolutions.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    { name: "Salons & Spas", icon: Scissors },
    { name: "Clinics", icon: Stethoscope },
    { name: "Real Estate", icon: HomeIcon },
    { name: "Dental", icon: HeartPulse },
    { name: "Gyms & Fitness", icon: Dumbbell },
    { name: "Coaching", icon: GraduationCap },
    { name: "Home Services", icon: Wrench },
    { name: "Auto Repair", icon: Car },
    { name: "Restaurants", icon: UtensilsCrossed },
    { name: "Law Firms", icon: Scale },
    { name: "Consulting", icon: Briefcase },
    { name: "Hotels", icon: Hotel },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Logistics", icon: Truck },
    { name: "Financial Services", icon: DollarSign },
    { name: "Pet Services", icon: PawPrint },
    { name: "Photography", icon: Camera },
    { name: "Education", icon: BookOpen },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Discovery",
      description: "We learn how your business works today — what's manual, what's broken, and what's holding you back.",
    },
    {
      step: "02",
      title: "Design",
      description: "We architect a solution that solves the real problem, not just the surface one.",
    },
    {
      step: "03",
      title: "Build",
      description: "We develop, test, and iterate until it works exactly the way your team needs it to.",
    },
    {
      step: "04",
      title: "Deploy & Support",
      description: "We go live with you and stay available long after launch.",
    },
  ];

  const whyDreamB = [
    { icon: Settings, text: "Built around your workflow — never generic" },
    { icon: Globe, text: "Cloud-ready from day one" },
    { icon: Zap, text: "Fast delivery without cutting corners" },
    { icon: Users, text: "End-to-end — design, build, and deploy" },
    { icon: Shield, text: "No lock-in contracts or hidden fees" },
    { icon: Languages, text: "Global reach, local understanding" },
  ];

  const mgmtBullets = [
    "Learning & training platforms",
    "Property management systems",
    "HR & employee management",
    "Inventory & supply chain systems",
    "Operations dashboards",
    "CRM & business process platforms",
  ];

  const aiAutomationBullets = [
    "Conversational AI — voice agents, chatbots, WhatsApp & SMS",
    "Lead capture, qualification, and follow-up",
    "Document processing and data extraction",
    "Intelligent scheduling and booking",
    "Workflow triggers, routing, and notifications",
  ];

  const mobileBullets = [
    "Customer-facing apps (iOS & Android)",
    "Internal staff and field team apps",
    "Real-time dashboards and reporting",
    "Push notifications, offline support, and integrations",
    "Cross-platform performance, modern design",
  ];

  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <Chatbot />

      {/* ── Header ── */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-main">DreamB Solutions</div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#how-we-work">How We Work</a>
            <a href="#inquiry-form">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            <div className="hero-title-wrapper">
              <span className="hero-title-line">Technology</span>
            </div>
            <div className="hero-title-wrapper">
              <span className="hero-title-line line-2">Your Business</span>
            </div>
            <div className="hero-title-wrapper">
              <span className="hero-title-line line-3">Runs On.</span>
            </div>
          </h1>
          <div className="hero-meta">
            <p className="hero-subtitle">
              AI automation, modern websites, and mobile apps — built specifically for your business.
            </p>
            <div className="hero-buttons">
              <Button size="lg" className="btn-primary" onClick={scrollToInquiry}>
                <MessageSquare className="btn-icon" />
                Start a Project
              </Button>
              <Button onClick={scrollToBookCall} size="lg" variant="outline" className="btn-secondary">
                <Calendar className="btn-icon" />
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="section problem-section">
        <div className="container problem-container">
          <div className="problem-label-col">
            <span className="section-label animate-reveal">The Problem</span>
            <h2 className="section-title animate-reveal delay-1">
              Most businesses are still running on yesterday's tools.
            </h2>
          </div>
          <div className="problem-text-col">
            <p className="problem-text animate-reveal">
              Spreadsheets, WhatsApp groups, paper records, disconnected software — these aren't just inefficient, they're holding your business back. Every manual process costs time. Every missed touchpoint costs a customer. Every outdated system is a barrier to growth.
            </p>
            <p className="problem-text animate-reveal delay-1">
              The businesses winning right now have one thing in common: they've replaced guesswork and manual effort with smart technology built around how they actually work. The question isn't whether to modernize — it's how long you can afford to wait.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Solution ── */}
      <section className="section solution-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">The Solution</span>
            <h2 className="section-title animate-reveal delay-1">Built for the way your business works.</h2>
            <p className="section-subtitle animate-reveal delay-2">
              We don't sell software. We build the right solution for your specific challenge — and we see it through from day one to long after launch.
            </p>
          </div>
          <div className="solution-grid">
            {[
              { icon: CheckCircle2, title: "Automate the Repetitive", text: "Let AI handle the tasks that drain your team's time and attention." },
              { icon: CheckCircle2, title: "Build What Fits You", text: "Custom systems and apps designed around your workflow — not generic software you have to work around." },
              { icon: CheckCircle2, title: "Move to the Cloud", text: "Scalable, secure, and accessible from anywhere in the world." },
              { icon: CheckCircle2, title: "Grow Without Limits", text: "Technology that scales with your business, not against it." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={`solution-item animate-reveal delay-${i + 1}`}>
                  <Icon className="solution-icon" />
                  <h3 className="solution-item-title">{item.title}</h3>
                  <p className="solution-item-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">What We Build</span>
            <h2 className="section-title animate-reveal delay-1">Our Services</h2>
            <p className="section-subtitle animate-reveal delay-2">
              Three offerings. One goal — technology that works as hard as your business does.
            </p>
          </div>

          <div className="services-grid">
            <Card className="service-card animate-reveal delay-1">
              <Cpu className="service-icon" />
              <h3 className="service-title">AI Automation</h3>
              <p className="service-description">
                We identify where your business spends time on repetitive, manual work — and automate it using AI. Intelligent automation that runs 24/7 without adding headcount.
              </p>
              <ul className="service-list">
                {aiAutomationBullets.map((b, i) => (
                  <li key={i} className="service-list-item">
                    <CheckCircle2 className="service-list-icon" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="service-card animate-reveal delay-2">
              <Globe className="service-icon" />
              <h3 className="service-title">Websites</h3>
              <p className="service-description">
                We design and build websites that work as hard as you do — conversion-focused, AI-integrated, and built for the way your business actually operates online.
              </p>
              <ul className="service-list">
                {websiteBullets.map((b, i) => (
                  <li key={i} className="service-list-item">
                    <CheckCircle2 className="service-list-icon" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="service-card animate-reveal delay-3">
              <Smartphone className="service-icon" />
              <h3 className="service-title">Mobile Apps</h3>
              <p className="service-description">
                We build mobile applications that put your business in your customers' pockets — and give your team the tools they need on the go. Native performance, modern design.
              </p>
              <ul className="service-list">
                {mobileBullets.map((b, i) => (
                  <li key={i} className="service-list-item">
                    <CheckCircle2 className="service-list-icon" />
                    {b}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Industries — infinite marquee ── */}
      <section className="section industries-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">Who We Serve</span>
            <h2 className="section-title animate-reveal delay-1">Industries We Serve</h2>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {[...industries, ...industries].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="industry-item">
                  <Icon className="industry-icon" />
                  <p className="industry-name">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section id="how-we-work" className="section how-it-works-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">The Process</span>
            <h2 className="section-title animate-reveal delay-1">From first conversation to final launch.</h2>
            <p className="section-subtitle animate-reveal delay-2">
              We keep things clear, fast, and collaborative at every step.
            </p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className={`step-item animate-reveal delay-${index + 1}`}>
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DreamB ── */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">Why Us</span>
            <h2 className="section-title animate-reveal delay-1">Built for businesses that refuse to settle.</h2>
            <p className="section-subtitle animate-reveal delay-2">
              We don't do off-the-shelf. Every solution we deliver is designed for the way you work.
            </p>
          </div>
          <div className="why-grid">
            {whyDreamB.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`why-item animate-reveal delay-${(index % 3) + 1}`}>
                  <Icon className="why-icon" />
                  <p className="why-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Let's Talk ── */}
      <section id="book-call" className="section book-call-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">Let's Talk</span>
            <h2 className="section-title animate-reveal delay-1">Every business is different. So is every solution we build.</h2>
            <p className="section-subtitle animate-reveal delay-2">
              There's no price list here — because your challenge deserves a real conversation, not a package. Tell us what you're working on and we'll come back with a clear plan.
            </p>
          </div>
          <div className="book-details animate-reveal delay-3">
            <div className="book-detail-item">
              <Clock size={20} strokeWidth={1.5} />
              <span>15 minutes</span>
            </div>
            <div className="book-detail-item">
              <Calendar size={20} strokeWidth={1.5} />
              <span>Free discovery call</span>
            </div>
            <div className="book-detail-item">
              <Globe size={20} strokeWidth={1.5} />
              <span>Video call — link sent on confirmation</span>
            </div>
          </div>
          <div className="book-cta animate-reveal delay-4">
            <a
              href={`${CALENDLY_URL}?hide_gdpr_banner=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary book-cal-link"
            >
              Book a Discovery Call
            </a>
            <button className="btn-secondary book-inquiry-link" onClick={scrollToInquiry}>
              Send an Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ── */}
      <section id="inquiry-form" className="section form-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label animate-reveal">Get In Touch</span>
            <h2 className="section-title animate-reveal delay-1">Send an Inquiry</h2>
          </div>
          <form onSubmit={handleSubmit} className="inquiry-form animate-reveal delay-2">
            <div className="form-row">
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="What are you looking for?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-automation">AI Automation</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="not-sure">Not sure yet — let's talk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="form-group">
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="form-textarea"
                rows={5}
              />
            </div>
            <Button type="submit" size="lg" className="btn-primary form-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="btn-icon animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo-main">DreamB Solutions</div>
          </div>
          <div className="footer-info">
            <a href="mailto:hello@dreambsolutions.com" className="contact-method-link">
              hello@dreambsolutions.com
            </a>
            <p className="footer-copyright">© 2026 DreamB Solutions — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
