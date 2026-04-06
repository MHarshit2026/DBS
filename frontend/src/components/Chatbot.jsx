import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am your AI assistant for DreamB Solutions. How can I help you today?' },
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
      return "Hello! How can I assist you with DreamB Solutions today?";
    }
    
    // Pricing
    if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('plan')) {
      return "Our Starter plan is $497/mo, Growth plan is $697/mo, and Enterprise is customized. Check the Pricing section below for more details!";
    }
    
    // Contact / Booking
    if (q.includes('contact') || q.includes('book') || q.includes('call') || q.includes('meet') || q.includes('demo')) {
      return "You can book a free consultation call from the 'Book a Call' section on our site, or fill out the Contact form at the bottom!";
    }
    
    // Services
    if (q.includes('service') || q.includes('what do you do') || q.includes('offer') || q.includes('features')) {
      return "We build AI voice agents for inbound & outbound calls, offer missed call recovery, AI chatbots, WhatsApp/SMS follow-ups, and AI-powered websites. Which one interests you?";
    }
    
    // Pilot / Trial
    if (q.includes('free') || q.includes('pilot') || q.includes('trial')) {
      return "Yes! We offer a free 14-day pilot so you can see the results for yourself with zero risk.";
    }

    // Languages
    if (q.includes('language') || q.includes('multilingual')) {
      return "Our AI agents are multilingual and can speak to your customers in their preferred language!";
    }

    // Support
    if (q.includes('support') || q.includes('help')) {
      return "For direct support, please email us at hello@dreambsolutions.com.";
    }

    // Default Fallback
    return "That's a great question! For detailed information or specific queries, please book a free call with us or use the Contact form so we can discuss it thoroughly.";
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
