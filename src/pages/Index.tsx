// import { useState } from "react";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import EventGrid from "@/components/EventGrid";
// import { useToast } from "@/hooks/use-toast";

// // Import event images
// import eventMusicImg from "@/assets/event-music.jpg";
// import eventTechImg from "@/assets/event-tech.jpg";
// import eventArtImg from "@/assets/event-art.jpg";
// import eventFoodImg from "@/assets/event-food.jpg";

// const Index = () => {
//   const { toast } = useToast();

//   // Mock event data
//   const [events] = useState([
//     {
//       id: "1",
//       title: "Summer Music Festival 2024",
//       description: "Join us for an unforgettable night of live music featuring top artists from around the world.",
//       date: "July 15, 2024",
//       time: "7:00 PM",
//       location: "Central Park, New York",
//       price: 89,
//       attendees: 1247,
//       rating: 4.8,
//       image: eventMusicImg,
//       category: "Music",
//       isFeatured: true,
//     },
//     {
//       id: "2",
//       title: "Tech Innovation Summit",
//       description: "Explore the latest in AI, blockchain, and emerging technologies with industry leaders.",
//       date: "August 3, 2024",
//       time: "9:00 AM",
//       location: "Convention Center, San Francisco",
//       price: 299,
//       attendees: 856,
//       rating: 4.9,
//       image: eventTechImg,
//       category: "Technology",
//     },
//     {
//       id: "3",
//       title: "Contemporary Art Gallery Opening",
//       description: "Experience cutting-edge contemporary art from emerging and established artists.",
//       date: "July 22, 2024",
//       time: "6:00 PM",
//       location: "Modern Art Museum, Los Angeles",
//       price: 0,
//       attendees: 234,
//       rating: 4.6,
//       image: eventArtImg,
//       category: "Art",
//     },
//     {
//       id: "4",
//       title: "Gourmet Food Festival",
//       description: "Taste exquisite dishes from renowned chefs and discover new culinary experiences.",
//       date: "July 28, 2024",
//       time: "12:00 PM",
//       location: "Waterfront Park, Seattle",
//       price: 45,
//       attendees: 1580,
//       rating: 4.7,
//       image: eventFoodImg,
//       category: "Food & Drink",
//     },
//     {
//       id: "5",
//       title: "Digital Marketing Workshop",
//       description: "Learn advanced digital marketing strategies from industry experts and grow your business.",
//       date: "August 10, 2024",
//       time: "2:00 PM",
//       location: "Business Center, Chicago",
//       price: 149,
//       attendees: 67,
//       rating: 4.5,
//       image: eventTechImg,
//       category: "Business",
//     },
//     {
//       id: "6",
//       title: "Jazz Under the Stars",
//       description: "An intimate evening of smooth jazz in a beautiful outdoor setting under the night sky.",
//       date: "July 30, 2024",
//       time: "8:00 PM",
//       location: "Riverside Amphitheater, Portland",
//       price: 35,
//       attendees: 345,
//       rating: 4.9,
//       image: eventMusicImg,
//       category: "Music",
//       isFeatured: true,
//     },
//   ]);

//   const handleSearch = (query: string, category: string, location: string) => {
//     toast({
//       title: "Search initiated",
//       description: `Searching for "${query}" in ${category} category`,
//     });
//   };

//   const handleRegister = (eventId: string) => {
//     const event = events.find(e => e.id === eventId);
//     toast({
//       title: "Registration Started",
//       description: `Redirecting to registration for "${event?.title}"`,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="pt-16">
//         <HeroSection onSearch={handleSearch} />
//         <EventGrid events={events} onRegister={handleRegister} />
//       </main>
//     </div>
//   );
// };

// ///////////////////////////////////////////////////////////////////////////////////
// // export default Index;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import EventGrid from "@/components/EventGrid";
// import { useToast } from "@/hooks/use-toast";

// // Event images
// import eventMusicImg from "@/assets/event-music.jpg";
// import eventTechImg from "@/assets/event-tech.jpg";
// import eventArtImg from "@/assets/event-art.jpg";
// import eventFoodImg from "@/assets/event-food.jpg";

// const Index = () => {
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   const [events] = useState([
//     {
//       id: "music",
//       title: "Summer Music Festival 2024",
//       description: "Join us for an unforgettable night of live music featuring top artists from around the world.",
//       date: "July 15, 2024",
//       time: "7:00 PM",
//       location: "Central Park, New York",
//       price: 89,
//       attendees: 1247,
//       rating: 4.8,
//       image: eventMusicImg,
//       category: "Music",
//       isFeatured: true,
//     },
//     {
//       id: "tech",
//       title: "Tech Innovation Summit",
//       description: "Explore the latest in AI, blockchain, and emerging technologies with industry leaders.",
//       date: "August 3, 2024",
//       time: "9:00 AM",
//       location: "Convention Center, San Francisco",
//       price: 299,
//       attendees: 856,
//       rating: 4.9,
//       image: eventTechImg,
//       category: "Technology",
//     },
//     {
//       id: "art",
//       title: "Contemporary Art Gallery Opening",
//       description: "Experience cutting-edge contemporary art from emerging and established artists.",
//       date: "July 22, 2024",
//       time: "6:00 PM",
//       location: "Modern Art Museum, Los Angeles",
//       price: 0,
//       attendees: 234,
//       rating: 4.6,
//       image: eventArtImg,
//       category: "Art",
//     },
//     {
//       id: "food",
//       title: "Gourmet Food Festival",
//       description: "Taste exquisite dishes from renowned chefs and discover new culinary experiences.",
//       date: "July 28, 2024",
//       time: "12:00 PM",
//       location: "Waterfront Park, Seattle",
//       price: 45,
//       attendees: 1580,
//       rating: 4.7,
//       image: eventFoodImg,
//       category: "Food & Drink",
//     },
//   ]);

//   const handleSearch = (query: string, category: string, location: string) => {
//     toast({
//       title: "Search initiated",
//       description: `Searching for "${query}" in ${category} category`,
//     });
//   };

//   const handleRegister = (eventId: string) => {
//     navigate(`/register?event=${eventId}`);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="pt-16">
//         <HeroSection onSearch={handleSearch} />
//         <EventGrid events={events} onRegister={handleRegister} />
//       </main>
//     </div>
//   );
// };

// export default Index;
// //////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventGrid from "@/components/EventGrid";
import { useToast } from "@/hooks/use-toast";
import { semanticSearch } from "@/services/semanticSearch";

// Import images (adjust paths if needed)
import eventMusicImg from "@/assets/event-music.jpg";
import eventTechImg from "@/assets/event-tech.jpg";
import eventArtImg from "@/assets/event-art.jpg";
import eventFoodImg from "@/assets/event-food.jpg";

const trendingEvents = [
  {
    id: "music",
    title: "Summer Music Festival 2024",
    description: "Join us for an unforgettable night...",
    date: "July 15, 2024",
    time: "7:00 PM",
    location: "Central Park, New York",
    price: 89,
    attendees: 1247,
    rating: 4.8,
    image: eventMusicImg,
    category: "Music",
    isFeatured: true,
  },
  {
      id: "2",
      title: "Tech Innovation Summit",
      description: "Explore the latest in AI, blockchain, and emerging technologies with industry leaders.",
      date: "August 3, 2024",
      time: "9:00 AM",
      location: "Convention Center, San Francisco",
      price: 299,
      attendees: 856,
      rating: 4.9,
      image: eventTechImg,
      category: "Technology",
    },
    {
      id: "3",
      title: "Contemporary Art Gallery Opening",
      description: "Experience cutting-edge contemporary art from emerging and established artists.",
      date: "July 22, 2024",
      time: "6:00 PM",
      location: "Modern Art Museum, Los Angeles",
      price: 0,
      attendees: 234,
      rating: 4.6,
      image: eventArtImg,
      category: "Art",
    },
    {
      id: "4",
      title: "Gourmet Food Festival",
      description: "Taste exquisite dishes from renowned chefs and discover new culinary experiences.",
      date: "July 28, 2024",
      time: "12:00 PM",
      location: "Waterfront Park, Seattle",
      price: 45,
      attendees: 1580,
      rating: 4.7,
      image: eventFoodImg,
      category: "Food & Drink",
    },
    {
      id: "5",
      title: "Digital Marketing Workshop",
      description: "Learn advanced digital marketing strategies from industry experts and grow your business.",
      date: "August 10, 2024",
      time: "2:00 PM",
      location: "Business Center, Chicago",
      price: 149,
      attendees: 67,
      rating: 4.5,
      image: eventTechImg,
      category: "Business",
    },
    {
      id: "6",
      title: "Jazz Under the Stars",
      description: "An intimate evening of smooth jazz in a beautiful outdoor setting under the night sky.",
      date: "July 30, 2024",
      time: "8:00 PM",
      location: "Riverside Amphitheater, Portland",
      price: 35,
      attendees: 345,
      rating: 4.9,
      image: eventMusicImg,
      category: "Music",
      isFeatured: true,
    },
  // ...other events as above...
];

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [events, setEvents] = useState(trendingEvents); // initial value!

  const handleSearch = async (query, category, location) => {
    try {
      toast({ title: "Searching events...", description: `Looking for "${query}"` });
      const searchTerm = [query, category !== "all" ? category : "", location].filter(Boolean).join(" ");
      const results = await semanticSearch(searchTerm);
      // Hydrate with master event data (by id)
      const hydrated = results.map(r => trendingEvents.find(ev => ev.id === r.id)).filter(Boolean);
      setEvents(hydrated);

      toast({
        title: "Search complete",
        description: `${hydrated.length} events found`,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      });
    }
  };

  const handleRegister = (eventId) => {
    navigate(`/register?event=${eventId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection onSearch={handleSearch} />
        <EventGrid events={events} onRegister={handleRegister} />
      </main>
    </div>
  );
};

export default Index;

