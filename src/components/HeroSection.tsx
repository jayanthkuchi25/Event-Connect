// // 
// import { useState } from "react";
// import { Search, Calendar, MapPin, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import heroImage from "@/assets/hero-events.jpg";
// import { Link } from "react-router-dom";

// interface HeroSectionProps {
//   onSearch: (query: string, category: string, location: string) => void;
// }

// const HeroSection = ({ onSearch }: HeroSectionProps) => {
//   const [query, setQuery] = useState("");
//   const [category, setCategory] = useState("all");
//   const [location, setLocation] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSearch(query, category, location);
//   };

//   return (
//     <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img 
//           src={heroImage} 
//           alt="Event Discovery" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-hero opacity-85" />
//         <div className="absolute inset-0 bg-black/20" />
//       </div>
      
//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 animate-float">
//         <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
//           <Sparkles className="w-8 h-8 text-white" />
//         </div>
//       </div>
      
//       <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
//         <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
//           <Calendar className="w-8 h-8 text-white" />
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//         <div className="animate-slide-up">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Discover Amazing 
//             <span className="block bg-gradient-to-r from-accent to-accent-pink bg-clip-text text-transparent">
//               Events
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Connect with your community through unforgettable experiences. 
//             Find concerts, workshops, conferences, and more.
//           </p>
//         </div>
        
//         {/* Search Section */}
//         <form
//           className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-hero animate-slide-up"
//           style={{ animationDelay: '0.3s' }}
//           onSubmit={handleSearch}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="md:col-span-2">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input 
//                   placeholder="Search events..."
//                   className="pl-10 bg-white/90 border-white/20 focus:border-primary h-12"
//                   value={query}
//                   onChange={e => setQuery(e.target.value)}
//                 />
//               </div>
//             </div>
            
//             <Select value={category} onValueChange={setCategory}>
//               <SelectTrigger className="bg-white/90 border-white/20 focus:border-primary h-12">
//                 <SelectValue placeholder="Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 <SelectItem value="music">Music & Concerts</SelectItem>
//                 <SelectItem value="tech">Technology</SelectItem>
//                 <SelectItem value="art">Arts & Culture</SelectItem>
//                 <SelectItem value="sports">Sports & Fitness</SelectItem>
//                 <SelectItem value="food">Food & Drink</SelectItem>
//                 <SelectItem value="business">Business</SelectItem>
//               </SelectContent>
//             </Select>

//             <div className="relative">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <Input
//                 placeholder="Location"
//                 className="pl-10 bg-white/90 border-white/20 focus:border-primary h-12"
//                 value={location}
//                 onChange={e => setLocation(e.target.value)}
//               />
//             </div>
            
//             <Button variant="hero" size="lg" className="h-12" type="submit">
//               <Search className="w-5 h-5 mr-2" />
//               Search
//             </Button>
//           </div>
//         </form>
        
//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
//           <Button variant="glass" size="lg" className="text-lg px-8">
//             Browse Events
//           </Button>
//           <Button variant="accent" size="lg" className="text-lg px-8" >
//             {/* Create Event */}
//             {/* Navigate to create-event page */}
//             <Link to="/create-event">Create Event</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState } from "react";
import { Search, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import heroImage from "@/assets/hero-events.jpg";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onSearch: (query: string, category: string, location: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, category, location);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Event Discovery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>
      <div
        className="absolute bottom-20 right-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Amazing{" "}
          <span className="block bg-gradient-to-r from-accent to-accent-pink bg-clip-text text-transparent">
            Events
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Connect with your community through unforgettable experiences.
        </p>

        {/* Search form */}
        <form
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-hero"
          onSubmit={handleSearch}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search events..."
                  className="pl-10 bg-white/90 border-white/20 focus:border-primary h-12"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-white/90 border-white/20 focus:border-primary h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="music">Music & Concerts</SelectItem>
                <SelectItem value="tech">Technology</SelectItem>
                <SelectItem value="art">Arts & Culture</SelectItem>
                <SelectItem value="sports">Sports & Fitness</SelectItem>
                <SelectItem value="food">Food & Drink</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Location"
                className="pl-10 bg-white/90 border-white/20 focus:border-primary h-12"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Button variant="hero" size="lg" className="h-12" type="submit">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button variant="glass" size="lg" className="text-lg px-8">
            Browse Events
          </Button>
          <Button variant="accent" size="lg" className="text-lg px-8">
            <Link to="/create-event">Create Event</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
