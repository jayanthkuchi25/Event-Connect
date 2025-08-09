// import { Calendar, MapPin, Users, Star } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// interface EventCardProps {
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
//   onRegister: (id: string) => void;
// }

// const EventCard = ({ 
//   id, 
//   title, 
//   description, 
//   date, 
//   time, 
//   location, 
//   price, 
//   attendees, 
//   rating, 
//   image, 
//   category,
//   isFeatured = false,
//   onRegister 
// }: EventCardProps) => {
//   return (
//     <Card className={`group cursor-pointer overflow-hidden bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 ${isFeatured ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
//       {/* Event Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={image} 
//           alt={title}
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
//         {/* Category Badge */}
//         <Badge 
//           className={`absolute top-3 left-3 ${
//             isFeatured ? 'bg-event-featured' : 'bg-primary'
//           } text-white font-medium`}
//         >
//           {category}
//         </Badge>
        
//         {/* Rating */}
//         <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
//           <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//           <span className="text-xs font-medium">{rating}</span>
//         </div>
        
//         {/* Price Tag */}
//         <div className="absolute bottom-3 right-3">
//           <Badge variant={price === 0 ? "secondary" : "default"} className={price === 0 ? "bg-event-free text-white" : "bg-event-premium text-white"}>
//             {price === 0 ? "FREE" : `$${price}`}
//           </Badge>
//         </div>
//       </div>
      
//       {/* Event Content */}
//       <div className="p-6">
//         <h3 className="font-bold text-lg text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//           {title}
//         </h3>
        
//         <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//           {description}
//         </p>
        
//         {/* Event Details */}
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <Calendar className="w-4 h-4" />
//             <span>{date} • {time}</span>
//           </div>
          
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <MapPin className="w-4 h-4" />
//             <span className="line-clamp-1">{location}</span>
//           </div>
          
//           <div className="flex items-center gap-2 text-sm text-muted-foreground">
//             <Users className="w-4 h-4" />
//             <span>{attendees} attending</span>
//           </div>
//         </div>
        
//         {/* Register Button */}
//         <Button 
//           onClick={() => onRegister(id)}
//           variant={isFeatured ? "hero" : "default"}
//           className="w-full"
//         >
//           Register Now
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default EventCard;
import { Calendar, MapPin, Users, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
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
  onRegister: (id: string) => void;
}

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  location,
  price,
  attendees,
  rating,
  image,
  category,
  isFeatured = false,
  onRegister,
}: EventCardProps) => {
  return (
    <Card
      className={`group cursor-pointer overflow-hidden bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 ${
        isFeatured ? "ring-2 ring-primary ring-opacity-50" : ""
      }`}
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category Badge */}
        <Badge
          className={`absolute top-3 left-3 ${
            isFeatured ? "bg-event-featured" : "bg-primary"
          } text-white font-medium`}
        >
          {category}
        </Badge>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{rating}</span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3">
          <Badge
            variant={price === 0 ? "secondary" : "default"}
            className={
              price === 0
                ? "bg-event-free text-white"
                : "bg-event-premium text-white"
            }
          >
            {price === 0 ? "FREE" : `$${price}`}
          </Badge>
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              {date} • {time}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{attendees} attending</span>
          </div>
        </div>

        {/* Register Button */}
        <Button
          onClick={() => onRegister(id)}
          variant={isFeatured ? "hero" : "default"}
          className="w-full"
        >
          Register Now
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
