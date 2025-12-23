"use client"

import { Header } from "../header";
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CountryCodeSelect } from "@/components/country-code-select"

type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  countryCode: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCountryCodeChange = (code: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // You can hook this up to an API call here
    setSubmitted(true)
  }

  return (
    <section
      className="dark:bg-black "
    >
      <Header/>
    <h2 className="text-5xl dark:text-white text-center mt-20 mb-4">Get in Touch</h2>
      <p className="text-center text-sm mb-10 text-muted-foreground animate-in fade-in duration-700 delay-500">
        We typically respond within 24 hours
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 mx-2 lg:mx-40 px-6 mb-10"
      >
      {/* Form Container */}
      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
            style={{ animationDelay: "100ms" }}
          >
            <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
              First Name
            </Label>
            <Input

              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-11"
              disabled={submitted}
            />
          </div>

          <div
            className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
            style={{ animationDelay: "150ms" }}
          >
            <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-11"
              disabled={submitted}
            />
          </div>
        </div>

        {/* Email Field */}
        <div
          className="space-y-2 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          style={{ animationDelay: "200ms" }}
        >
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-11"
            disabled={submitted}
          />
        </div>

        {/* Phone Field with Country Code */}
        <div
          className="space-y-2 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          style={{ animationDelay: "250ms" }}
        >
          <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
            Contact Number
          </Label>
          <div className="flex gap-3">
            <CountryCodeSelect value={formData.countryCode} onChange={handleCountryCodeChange} disabled={submitted} />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              placeholder="123 456 7890"
              className="flex-1 bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-11"
              disabled={submitted}
            />
          </div>
        </div>

        {/* Message Field */}
        <div
          className="space-y-2 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          style={{ animationDelay: "300ms" }}
        >
          <Label htmlFor="message" className="text-sm font-semibold text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Tell us about your inquiry or feedback..."
            rows={5}
            className="bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
            disabled={submitted}
          />
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Form Submitted!</p>
              <p className="text-sm text-green-600 dark:text-green-300">
                Your message has been captured. We'll get back to you soon!
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={submitted}
          className="w-full h-12 text-base font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both"
          style={{ animationDelay: "350ms" }}
        >
          {submitted ? (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </div>

      
    </form>
    </section>
  );
}

