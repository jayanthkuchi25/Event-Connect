import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Star, CreditCard, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import musicEvent from "@/assets/event-music.jpg";
import techEvent from "@/assets/event-tech.jpg";
import artEvent from "@/assets/event-art.jpg";

const RegisterEvent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const eventId = searchParams.get("event") || "music";
  
  // Mock event data - in real app, this would come from API
  const events = {
    music: {
      title: "Summer Music Festival 2024",
      description: "Join us for an unforgettable night of live music featuring top artists from around the world.",
      category: "Music",
      rating: 4.8,
      price: 89,
      date: "July 15, 2024 • 7:00 PM",
      location: "Central Park, New York",
      attendees: 1247,
      image: musicEvent,
      isFree: false,
    },
    tech: {
      title: "Tech Innovation Summit",
      description: "Explore the latest in AI, blockchain, and emerging technologies with industry leaders.",
      category: "Technology",
      rating: 4.9,
      price: 299,
      date: "August 3, 2024 • 9:00 AM",
      location: "Convention Center, San Francisco",
      attendees: 856,
      image: techEvent,
      isFree: false,
    },
    art: {
      title: "Contemporary Art Gallery Opening",
      description: "Experience cutting-edge contemporary art from emerging and established artists.",
      category: "Art",
      rating: 4.6,
      price: 0,
      date: "July 22, 2024 • 6:00 PM",
      location: "Modern Art Museum, Los Angeles",
      attendees: 234,
      image: artEvent,
      isFree: true,
    },
  };

  const event = events[eventId as keyof typeof events] || events.music;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful!",
      description: `You've been registered for ${event.title}. Check your email for confirmation.`,
    });

    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-card border-purple-light/20">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-primary/90 text-white backdrop-blur-sm">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium ml-1">{event.rating}</span>
                  </div>
                  {event.isFree ? (
                    <Badge className="bg-green-500 hover:bg-green-600">FREE</Badge>
                  ) : (
                    <Badge className="bg-orange-vibrant hover:bg-orange-vibrant/90">
                      ${event.price}
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-3 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-3 text-primary" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-3 text-primary" />
                    <span className="font-medium">{event.attendees} attending</span>
                  </div>
                </div>

                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Ticket Price:</span>
                    <span className="font-semibold">
                      {event.isFree ? "FREE" : `$${event.price}`}
                    </span>
                  </div>
                  {!event.isFree && (
                    <>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Service Fee:</span>
                        <span>$5.99</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span className="text-primary">${event.price + 5.99}</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-purple-light/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Register for Event
                </CardTitle>
                <p className="text-muted-foreground">
                  Please fill out the form below to complete your registration
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <User className="mr-2 h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-purple-light/30 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-purple-light/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 border-purple-light/30 focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="pl-10 border-purple-light/30 focus:border-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Emergency Contact */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Emergency Contact</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="border-purple-light/30 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          name="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          className="border-purple-light/30 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Special Requests */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="border-purple-light/30 focus:border-primary min-h-[100px]"
                        placeholder="Please let us know about any special accommodations, dietary restrictions, or accessibility needs..."
                      />
                    </div>
                  </div>

                  {/* Payment Section */}
                  {!event.isFree && (
                    <>
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-primary" />
                          Payment Information
                        </h3>
                        <div className="bg-secondary/50 rounded-lg p-4 border border-purple-light/20">
                          <p className="text-sm text-muted-foreground">
                            Payment processing will be handled securely on the next step.
                            No payment information is stored on our servers.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity h-12 text-lg font-semibold"
                    >
                      {isLoading ? (
                        "Processing Registration..."
                      ) : (
                        event.isFree ? "Complete Registration" : `Pay $${event.price + 5.99} & Register`
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By registering, you agree to our Terms of Service and Privacy Policy.
                      You will receive a confirmation email after successful registration.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;