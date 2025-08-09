import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Zap, Shield, Globe, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built for communities, by communities. Connect with like-minded individuals and create lasting relationships.",
    },
    {
      icon: Heart,
      title: "Passion Focused",
      description:
        "We believe in the power of passion. Find events that truly resonate with your interests and hobbies.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Discover events instantly with our advanced search and filtering capabilities.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "Your privacy and security are our top priorities. All events are verified and moderated.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "From local meetups to international conferences, discover events anywhere in the world.",
    },
    {
      icon: Rocket,
      title: "Easy to Use",
      description:
        "Create and manage events with our intuitive interface. No technical skills required.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Events Created" },
    { number: "50+", label: "Cities" },
    { number: "95%", label: "User Satisfaction" },
  ];

  // Always one team member
  const team = [
    {
      name: "Jayanth Kumar",
      role: "Founder & CEO",
      description:
        "Passionate about bringing communities together through meaningful events.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              About Event-Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Communities Through{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Amazing Events
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Event-Connect is more than just an event platform. We're a
              community-driven ecosystem that brings people together through
              shared experiences, meaningful connections, and unforgettable
              moments.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Event-Connect?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've built the platform with features that matter most to
                event organizers and attendees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-0 bg-card hover:shadow-glow transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section - Always One Member Centered */}
        <section className="py-16 bg-gradient-to-b from-transparent to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The passionate individual behind Event-Connect who works
                tirelessly to connect communities.
              </p>
            </div>

            {/* Centered Card */}
            <div className="flex justify-center">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-0 bg-card hover:shadow-glow transition-all duration-300 max-w-sm"
                >
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Card className="bg-gradient-card backdrop-blur-sm border border-glass p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To create a world where every person can easily discover,
                attend, and create events that enrich their lives and
                strengthen their communities. We believe that shared
                experiences have the power to bridge differences, spark
                creativity, and build lasting connections.
              </p>
              <Badge className="bg-primary text-primary-foreground px-6 py-2 text-lg">
                Building Communities, One Event at a Time
              </Badge>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
