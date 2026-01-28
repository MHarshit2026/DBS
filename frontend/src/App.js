import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Toaster, toast } from "sonner";
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Globe, 
  PhoneCall,
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
  TrendingUp,
  Shield,
  Rocket,
  Languages
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    country: "",
    service: "",
    message: ""
  });

  const scrollToInquiry = () => {
    document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Your inquiry has been submitted successfully.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      country: "",
      service: "",
      message: ""
    });
  };

  const services = [
    {
      title: "AI Voice Agents (Inbound)",
      description: "Answer every incoming call instantly with AI-powered voice agents that sound human.",
      icon: PhoneCall
    },
    {
      title: "AI Voice Agents (Outbound)",
      description: "Automate follow-ups, confirmations, and outreach campaigns with intelligent voice agents.",
      icon: Phone
    },
    {
      title: "Missed Call Recovery",
      description: "Never lose a lead again. Automatically call back missed calls within seconds.",
      icon: Clock
    },
    {
      title: "WhatsApp & SMS Follow-Up",
      description: "Engage customers on their preferred channels with automated messaging.",
      icon: MessageSquare
    },
    {
      title: "AI Chatbots",
      description: "Deploy intelligent chatbots on your website to capture and qualify leads 24/7.",
      icon: Users
    },
    {
      title: "AI-Powered Websites",
      description: "Get a conversion-optimized website built with AI technology and smart integrations.",
      icon: Globe
    },
    {
      title: "CRM & Calendar Integration",
      description: "Seamlessly sync with your existing tools. Appointments booked directly to your calendar.",
      icon: Calendar
    }
  ];

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
    { name: "Education", icon: BookOpen }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Tell us about your business",
      description: "Share your industry, goals, and how you want your AI agent to help."
    },
    {
      step: "02",
      title: "We build your AI agent",
      description: "Our team customizes your voice agent with your brand voice and business rules."
    },
    {
      step: "03",
      title: "Go live in days",
      description: "Your AI receptionist is trained, tested, and ready to handle calls."
    },
    {
      step: "04",
      title: "Get leads daily",
      description: "Watch your calendar fill up while you focus on delivering great service."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/mo",
      features: [
        "Up to 100 calls/month",
        "Basic AI voice agent",
        "SMS follow-up",
        "Calendar integration",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "$199",
      period: "/mo",
      features: [
        "Up to 500 calls/month",
        "Advanced AI voice agent",
        "WhatsApp & SMS",
        "CRM integration",
        "Priority support",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited calls",
        "Multi-location support",
        "Dedicated success manager",
        "Custom integrations",
        "White-label options",
        "24/7 priority support"
      ]
    }
  ];

  const whyDreamB = [
    { icon: Shield, text: "No lock-in contracts" },
    { icon: Zap, text: "Free 14-day pilot" },
    { icon: Rocket, text: "Fast setup (under 7 days)" },
    { icon: Users, text: "Human fallback available" },
    { icon: Languages, text: "Multilingual support" },
    { icon: Globe, text: "Global reach & availability" }
  ];

  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-main">DBC</div>
            <div className="logo-sub">DreamB,</div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#inquiry-form">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">Never Miss a Customer Again.</h1>
          <p className="hero-subtitle">
            AI voice agents that answer calls 24/7, book appointments, and capture leads—so you can focus on growing your business.
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg" className="btn-primary">
              <a href="#calendly-link-here" target="_blank" rel="noopener noreferrer">
                <Calendar className="btn-icon" />
                Book a Call
              </a>
            </Button>
            <Button onClick={scrollToInquiry} size="lg" variant="outline" className="btn-secondary">
              <MessageSquare className="btn-icon" />
              Send Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section problem-section">
        <div className="container">
          <h2 className="section-title">The Problem</h2>
          <div className="problem-content">
            <p className="problem-text">
              Every missed call is a missed customer. Studies show that <strong>80% of callers won't leave a voicemail</strong>, and <strong>67% won't call back</strong>. If you're busy with a client, closed for the day, or just can't pick up—those leads go straight to your competitor.
            </p>
            <p className="problem-text">
              Traditional receptionists cost thousands per month, take sick days, and can only handle one call at a time. Your business deserves better.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section solution-section">
        <div className="container">
          <h2 className="section-title">The DreamB, Solution</h2>
          <p className="section-subtitle">Your AI Receptionist. Always On. Never Late.</p>
          <div className="solution-grid">
            <div className="solution-item">
              <CheckCircle2 className="solution-icon" />
              <h3 className="solution-item-title">24/7 Availability</h3>
              <p className="solution-item-text">Answer calls anytime, even at 3 AM or on holidays.</p>
            </div>
            <div className="solution-item">
              <CheckCircle2 className="solution-icon" />
              <h3 className="solution-item-title">Zero Salaries</h3>
              <p className="solution-item-text">No hiring, training, or payroll. Just results.</p>
            </div>
            <div className="solution-item">
              <CheckCircle2 className="solution-icon" />
              <h3 className="solution-item-title">Instant Callback</h3>
              <p className="solution-item-text">Missed calls get returned in under 60 seconds.</p>
            </div>
            <div className="solution-item">
              <CheckCircle2 className="solution-icon" />
              <h3 className="solution-item-title">Multilingual</h3>
              <p className="solution-item-text">Speak to customers in their preferred language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="service-card">
                  <Icon className="service-icon" />
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => {
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

      {/* How It Works Section */}
      <section className="section how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <div className="pricing-notice">
            <span className="notice-icon">⚠️</span>
            <span className="notice-text">Prices vary region to region and country to country.</span>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <div className="pricing-amount">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature">
                      <CheckCircle2 className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="pricing-cta">
            <Button onClick={scrollToInquiry} size="lg" className="btn-primary">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why DreamB Section */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why DreamB,</h2>
          <div className="why-grid">
            {whyDreamB.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="why-item">
                  <Icon className="why-icon" />
                  <p className="why-text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="section form-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-row">
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
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
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})} required>
                  <SelectTrigger className="form-select">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="voice-agent">Voice Agent</SelectItem>
                    <SelectItem value="chatbot">Chatbot</SelectItem>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="form-group">
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="form-textarea"
                rows={5}
              />
            </div>
            <Button type="submit" size="lg" className="btn-primary form-submit">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Stop Missing Calls?</h2>
          <Button asChild size="lg" className="btn-primary">
            <a href="#calendly-link-here" target="_blank" rel="noopener noreferrer">
              <Calendar className="btn-icon" />
              Book a Free Call
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo-main">DBC</div>
            <div className="logo-sub">DreamB,</div>
          </div>
          <div className="footer-info">
            <p className="footer-email">hello@dreamb.com</p>
            <p className="footer-copyright">© 2026 DreamB, — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
