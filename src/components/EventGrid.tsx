// import EventCard from "./EventCard";
// import { Button } from "@/components/ui/button";
// import { Filter, Grid, List } from "lucide-react";

// interface Event {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   price: number;
//   attendees: number;
//   rating: number;
//   image: string;
//   category: string;
//   isFeatured?: boolean;
// }

// interface EventGridProps {
//   events: Event[];
//   onRegister: (id: string) => void;
// }

// const EventGrid = ({ events, onRegister }: EventGridProps) => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Section Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
//         <div>
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">
//             Trending Events
//           </h2>
//           <p className="text-xl text-gray-600">
//             Discover popular events happening near you
//           </p>
//         </div>
        
//         <div className="flex items-center gap-4 mt-4 md:mt-0">
//           <Button variant="outline" size="icon">
//             <Filter className="w-4 h-4" />
//           </Button>
//           <div className="flex border rounded-lg p-1">
//             <Button variant="ghost" size="icon" className="bg-primary text-primary-foreground">
//               <Grid className="w-4 h-4" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <List className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Events Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {events.map((event) => (
//           <EventCard
//             key={event.id}
//             {...event}
//             onRegister={onRegister}
//           />
//         ))}
//       </div>

//       {/* Load More */}
//       <div className="text-center mt-12">
//         <Button variant="accent" size="lg" className="px-12">
//           Load More Events
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default EventGrid;
import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  attendees: number;
  rating: number;
  image: string;
  category: string;
  isFeatured?: boolean;
}

interface EventGridProps {
  events: Event[];
  onRegister: (id: string) => void;
}

const EventGrid = ({ events, onRegister }: EventGridProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Trending Events
          </h2>
          <p className="text-xl text-gray-600">
            Discover popular events happening near you
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <div className="flex border rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className="bg-primary text-primary-foreground"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} onRegister={onRegister} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="accent" size="lg" className="px-12">
          Load More Events
        </Button>
      </div>
    </section>
  );
};

export default EventGrid;
