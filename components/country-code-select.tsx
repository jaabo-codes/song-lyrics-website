"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

const COUNTRY_CODES = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+61", country: "Australia" },
  { code: "+27", country: "South Africa" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+1-201", country: "Canada" },
  { code: "+64", country: "New Zealand" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+47", country: "Norway" },
  { code: "+46", country: "Sweden" },
  { code: "+45", country: "Denmark" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+48", country: "Poland" },
  { code: "+30", country: "Greece" },
  { code: "+358", country: "Finland" },
]

interface CountryCodeSelectProps {
  value: string
  onChange: (code: string) => void
  disabled?: boolean
}

export function CountryCodeSelect({ value, onChange, disabled }: CountryCodeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-32 bg-background border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-16">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {COUNTRY_CODES.map((item) => (
          <SelectItem key={item.code} value={item.code} className="hover:bg-primary/10 cursor-pointer">
            {item.code} {item.country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
