"use client";

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Phone,
    Clock,
    Send,
    Linkedin,
    Twitter,
    Instagram,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                // Reset after 3 seconds
                setTimeout(() => {
                    setFormStatus('idle');
                    setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: '',
                        message: ''
                    });
                }, 3000);
            } else {
                setFormStatus('idle');
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('idle');
            alert('Failed to send message. Please try again.');
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const services = [
        "Alpha Lead Gen 2.0",
        "AI Agents & Automation",
        "Paid Media Strategy",
        "SEO & GEO",
        "CRM Architecture",
        "Revenue Analytics",
        "Other"
    ];

    const contactInfo = [
        {
            icon: MapPin,
            label: "Office",
            value: "Dubai, United Arab Emirates",
            subtext: "Business Bay, The Oberoi Centre"
        },
        {
            icon: Mail,
            label: "Email",
            value: "hello@clicksalesmedia.com",
            href: "mailto:hello@clicksalesmedia.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+971 50 123 4567",
            href: "tel:+971501234567"
        },
        {
            icon: Clock,
            label: "Working Hours",
            value: "Sun - Thu: 9AM - 6PM",
            subtext: "Dubai Time (GMT+4)"
        }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com/company/clicksalesmedia", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/clicksalesmedia", label: "Twitter" },
        { icon: Instagram, href: "https://instagram.com/clicksalesmedia", label: "Instagram" }
    ];

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AD8253]/5 rounded-full blur-3xl" />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(173, 130, 83, 1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(173, 130, 83, 1) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="relative z-10 container mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#AD8253]" />
                            <div className="w-2 h-2 rounded-full bg-[#AD8253]" />
                            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#AD8253]" />
                        </div>

                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                            Get In Touch
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Let's Build Your{" "}
                            <span className="gradient-gold-text">Revenue Engine</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#a1a1a1] max-w-2xl mx-auto">
                            Ready to transform your marketing into a predictable growth machine?
                            We're here to help you scale.
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-5 gap-12 items-start">

                        {/* Contact Form - Takes 3 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="glass-card p-8 md:p-10">
                                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                                <p className="text-[#a1a1a1] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-white">
                                                Full Name <span className="text-[#AD8253]">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white placeholder-[#6b6b6b] focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-white">
                                                Email Address <span className="text-[#AD8253]">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white placeholder-[#6b6b6b] focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Company & Phone Row */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium text-white">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white placeholder-[#6b6b6b] focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-white">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white placeholder-[#6b6b6b] focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all"
                                                placeholder="+971 50 123 4567"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-white">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all appearance-none cursor-pointer"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23AD8253' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 12px center',
                                                backgroundSize: '20px'
                                            }}
                                        >
                                            <option value="" className="bg-[#272727]">Select a service</option>
                                            {services.map((service, i) => (
                                                <option key={i} value={service} className="bg-[#272727]">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-white">
                                            Your Message <span className="text-[#AD8253]">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-[#272727] border border-white/10 text-white placeholder-[#6b6b6b] focus:border-[#AD8253] focus:outline-none focus:ring-1 focus:ring-[#AD8253] transition-all resize-none"
                                            placeholder="Tell us about your project, goals, and how we can help..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formStatus !== 'idle'}
                                        className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${formStatus === 'success'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] hover:scale-[1.02]'
                                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                                    >
                                        {formStatus === 'idle' && (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                        {formStatus === 'sending' && (
                                            <>
                                                Sending...
                                                <div className="w-5 h-5 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
                                            </>
                                        )}
                                        {formStatus === 'success' && (
                                            <>
                                                Message Sent!
                                                <CheckCircle2 className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info - Takes 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Contact Details Card */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 border border-[#AD8253]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#AD8253]/20 transition-colors">
                                                <item.icon className="w-5 h-5 text-[#AD8253]" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#6b6b6b] mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-white hover:text-[#AD8253] transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white">{item.value}</p>
                                                )}
                                                {item.subtext && (
                                                    <p className="text-sm text-[#6b6b6b] mt-1">{item.subtext}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links Card */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="w-12 h-12 rounded-xl bg-[#272727] border border-white/10 flex items-center justify-center text-[#a1a1a1] hover:bg-[#AD8253]/20 hover:border-[#AD8253]/30 hover:text-[#AD8253] transition-all"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Response Card */}
                            <div className="glass-card p-8 bg-gradient-to-br from-[#AD8253]/10 to-transparent border-[#AD8253]/20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm text-[#a1a1a1]">Quick Response Time</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">We Reply Fast</h3>
                                <p className="text-[#a1a1a1] text-sm mb-4">
                                    Our team typically responds within 2-4 hours during business hours.
                                </p>
                                <div className="flex items-center gap-2 text-[#AD8253] text-sm font-medium">
                                    <span>Book a call instead</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 bg-[#272727] overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { value: "500+", label: "Clients Served" },
                            { value: "$2B+", label: "Revenue Generated" },
                            { value: "12x", label: "Average ROI" },
                            { value: "24h", label: "Response Time" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-gold-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
