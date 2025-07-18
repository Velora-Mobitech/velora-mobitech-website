import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GetDemo = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    companySize: "",
    industry: "",
    location: "",
    currentTransportation: "",
    challenges: "",
    requirements: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full glass"
          >
            <span className="text-sm font-medium text-primary">
              Get Your Personalized Demo
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">
            Transform Your Company's{" "}
            <span className="text-gradient font-medium">
              Transportation Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Tell us about your company and transportation needs. Our experts
            will create a customized demo showcasing how Velora can
            revolutionize your workplace mobility.
          </p>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="container px-4 pb-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">
                    Company Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Company Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="website"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("companySize", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">
                          201-500 employees
                        </SelectItem>
                        <SelectItem value="501-1000">
                          501-1000 employees
                        </SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("industry", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">
                          Finance & Banking
                        </SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Company Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State, Country"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">
                    Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      placeholder="Your full name"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Transportation Requirements */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <ArrowRight className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">
                    Transportation Requirements
                  </h2>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentTransportation">
                    Current Transportation Solution
                  </Label>
                  <Textarea
                    id="currentTransportation"
                    placeholder="Describe your current employee transportation setup (if any)"
                    value={formData.currentTransportation}
                    onChange={(e) =>
                      handleInputChange("currentTransportation", e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">Current Challenges</Label>
                  <Textarea
                    id="challenges"
                    placeholder="What transportation challenges is your company facing?"
                    value={formData.challenges}
                    onChange={(e) =>
                      handleInputChange("challenges", e.target.value)
                    }
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Any specific features or requirements you'd like to see in the demo?"
                    value={formData.requirements}
                    onChange={(e) =>
                      handleInputChange("requirements", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="button-gradient px-8"
                >
                  Schedule My Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Our team will contact you within 24 hours to schedule your
                  personalized demo
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="container px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are dedicated to revolutionizing
              your company's transportation with innovative e-mobility
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 - Krishna Vamsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/krishna-vamsi.jpg"
                  alt="Krishna Vamsi Veerisetti"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Krishna Vamsi Veerisetti
              </h3>
              <p className="text-primary font-medium mb-3">CEO & Founder</p>
              <p className="text-muted-foreground text-sm mb-4">
                Leading innovation in smart e-mobility solutions and enterprise
                transportation
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">
                    krishna@veloramobitech.systems
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+91 8688505081</span>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 - Vijaya Balaji */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/vijaya-balaji.jpg"
                  alt="Vijaya Balaji Tatta"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Vijaya Balaji Tatta
              </h3>
              <p className="text-primary font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-sm mb-4">
                Expert in AI/ML technologies and smart transportation system
                architecture
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">vijaya@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+91 9347767825</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="container px-4 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help or Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our mobility experts are here to help you understand how Velora
              can transform your company's transportation. Get in touch today!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  team@veloramobitech.systems
                </p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 86885 05081</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">IIT Guwahati,Assam</p>
              </div>
            </div>

            <Button size="lg" className="button-gradient">
              Contact Us Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default GetDemo;
