import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I\'m here to help you learn about DreamB Solutions. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response based on FAQs
    setTimeout(() => {
      const resp = getBotResponse(userMessage.content);
      setMessages((prev) => [...prev, { role: 'assistant', content: resp }]);
    }, 600);
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    // Greeting
    if (q.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hello! How can I help you today? I can tell you about our services, how we work, or help you get started.";
    }

    // Services / What do you do
    if (q.includes('service') || q.includes('what do you do') || q.includes('offer') || q.includes('what do you build')) {
      return "We build three things: AI automation, modern websites, and mobile apps — all built specifically around your business.";
    }

    // Websites
    if (q.includes('website') || q.includes('web') || q.includes('landing page') || q.includes('ecommerce') || q.includes('portal')) {
      return "We design and build websites that convert — from AI-powered business sites to booking platforms, e-commerce stores, and client portals.";
    }

    // AI Automation
    if (q.includes('ai') || q.includes('automation') || q.includes('automate') || q.includes('chatbot') || q.includes('voice') || q.includes('whatsapp') || q.includes('bot')) {
      return "We automate repetitive business processes using AI — customer communication, lead follow-up, document processing, scheduling, workflow routing, and more. It runs 24/7 without adding headcount.";
    }

    // Mobile Apps
    if (q.includes('mobile') || q.includes('app') || q.includes('ios') || q.includes('android')) {
      return "Yes! We build iOS and Android apps — both customer-facing and for your internal team. Native performance, modern design.";
    }

    // Pricing / Cost
    if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('pricing') || q.includes('quote')) {
      return "We don't have fixed pricing — every project is scoped to your specific needs. Book a free 15-minute discovery call and we'll put together a clear plan for you.";
    }

    // Contact / Booking
    if (q.includes('contact') || q.includes('book') || q.includes('call') || q.includes('meet') || q.includes('demo') || q.includes('start')) {
      return "You can book a free discovery call using the 'Book a Discovery Call' button, or fill out the inquiry form on our site and we'll get back to you.";
    }

    // Free / Trial
    if (q.includes('free') || q.includes('trial') || q.includes('pilot')) {
      return "Every engagement starts with a free discovery call. We learn about your business first before recommending anything — no commitment required.";
    }

    // Support / Help
    if (q.includes('support') || q.includes('help')) {
      return "For direct support, reach us at hello@dreambsolutions.com — we're always around.";
    }

    // Digital transformation / legacy / modernize
    if (q.includes('legacy') || q.includes('modernize') || q.includes('digital') || q.includes('transform') || q.includes('cloud')) {
      return "That's exactly what we do. We help businesses replace outdated, manual processes with modern cloud-ready technology — from custom systems to full digital transformation.";
    }

    // Default fallback
    return "Great question! The best next step is to book a free discovery call or send us an inquiry — we'd love to learn about your business and figure out how we can help.";
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-2xl bg-white text-black hover:bg-gray-200 transition-transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] shadow-2xl z-50 flex flex-col h-[500px] max-h-[85vh] bg-black text-white border border-gray-800 rounded-2xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between border-b border-gray-800 pb-3 pt-4 px-4 bg-gray-900/50">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div>DreamB AI</div>
                <div className="text-xs font-normal text-gray-400">Always online</div>
              </div>
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-hidden p-0 bg-black">
            <div 
              className="h-full overflow-y-auto p-4 space-y-4"
              ref={scrollRef}
              style={{ scrollBehavior: 'smooth' }}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="flex-shrink-0 mt-1 mt-auto">
                      {msg.role === 'user' ? (
                        <div className="bg-gray-800 rounded-full p-1.5"><User className="h-3.5 w-3.5" /></div>
                      ) : (
                        <div className="bg-white text-black rounded-full p-1.5"><Bot className="h-3.5 w-3.5" /></div>
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl text-[14px] leading-relaxed ${msg.role === 'user' ? 'bg-white text-black rounded-br-sm' : 'bg-gray-800 text-white rounded-bl-sm'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="border-t border-gray-800 p-3 bg-gray-900/50">
            <form onSubmit={handleSend} className="flex w-full gap-2 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-950 border-gray-700 text-white placeholder:text-gray-500 rounded-full pl-4 pr-12 focus-visible:ring-1 focus-visible:ring-gray-600 h-11"
              />
              <Button type="submit" size="icon" disabled={!input.trim()} className="absolute right-1 top-1 h-9 w-9 rounded-full bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:bg-gray-700 disabled:text-gray-400 shrink-0 transition-colors">
                <Send className="h-4 w-4 ml-0.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
