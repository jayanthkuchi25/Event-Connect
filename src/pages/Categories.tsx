import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Briefcase, Code, Palette, Dumbbell, UtensilsCrossed, Users, Calendar } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "music",
      name: "Music & Concerts",
      description: "Live performances, festivals, and musical events",
      icon: Music,
      count: 156,
      color: "bg-purple-500",
    },
    {
      id: "business",
      name: "Business & Networking",
      description: "Professional events, conferences, and meetups",
      icon: Briefcase,
      count: 89,
      color: "bg-blue-500",
    },
    {
      id: "tech",
      name: "Technology",
      description: "Tech talks, hackathons, and innovation events",
      icon: Code,
      count: 72,
      color: "bg-green-500",
    },
    {
      id: "arts",
      name: "Arts & Culture",
      description: "Gallery openings, theater, and cultural events",
      icon: Palette,
      count: 43,
      color: "bg-pink-500",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      description: "Athletic events, competitions, and fitness classes",
      icon: Dumbbell,
      count: 67,
      color: "bg-orange-500",
    },
    {
      id: "food",
      name: "Food & Drink",
      description: "Culinary experiences, tastings, and food festivals",
      icon: UtensilsCrossed,
      count: 34,
      color: "bg-red-500",
    },
    {
      id: "community",
      name: "Community",
      description: "Local gatherings, volunteer events, and social causes",
      icon: Users,
      count: 28,
      color: "bg-indigo-500",
    },
    {
      id: "workshops",
      name: "Workshops & Learning",
      description: "Educational events, training, and skill development",
      icon: Calendar,
      count: 51,
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event <span className="bg-gradient-primary bg-clip-text text-transparent">Categories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover events by category and find exactly what interests you
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="group cursor-pointer border-0 bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-card backdrop-blur-sm border border-glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Event Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">540+</div>
                  <div className="text-sm text-muted-foreground">Total Events</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2.5K+</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;