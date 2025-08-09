// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, User, Heart, Bell } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hooks/useAuth";


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, signOut } = useAuth();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
//                 Event-Connect
//               </h1>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:block">
//             <div className="flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
//                 Discover
//               </a>
//               <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
//                 Categories
//               </a>
//               <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
//                 Create Event
//               </a>
//               <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
//                 About
//               </a>
//             </div>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="ghost" size="icon">
//               <Heart className="w-5 h-5" />
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Bell className="w-5 h-5" />
//             </Button>
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <Button variant="ghost" size="icon">
//                   <User className="w-5 h-5" />
//                 </Button>
//                 <Button variant="outline" onClick={signOut}>
//                   Sign Out
//                 </Button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Button variant="outline" asChild>
//                   <Link to="/auth">Sign In</Link>
//                 </Button>
//                 <Button variant="default" asChild>
//                   <Link to="/auth">Sign Up</Link>
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
//                 Discover
//               </a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
//                 Categories
//               </a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
//                 Create Event
//               </a>
//               <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
//                 About
//               </a>
//               <div className="flex space-x-2 px-3 py-2">
//                 {user ? (
//                   <Button variant="outline" className="flex-1" onClick={signOut}>
//                     Sign Out
//                   </Button>
//                 ) : (
//                   <>
//                     <Button variant="outline" className="flex-1" asChild>
//                       <Link to="/auth">Sign In</Link>
//                     </Button>
//                     <Button variant="default" className="flex-1" asChild>
//                       <Link to="/auth">Sign Up</Link>
//                     </Button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Event-Connect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Discover
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Categories
              </Link>
              <Link to="/create-event" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Create Event
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </Link>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon"><Heart className="w-5 h-5" /></Button>
            <Button variant="ghost" size="icon"><Bell className="w-5 h-5" /></Button>
            {user ? (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon"><User className="w-5 h-5" /></Button>
                <Button variant="outline" onClick={signOut}>Sign Out</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" asChild><Link to="/auth">Sign In</Link></Button>
                <Button variant="default" asChild><Link to="/auth">Sign Up</Link></Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                Discover
              </Link>
              <Link to="/categories" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                Categories
              </Link>
              <Link to="/create-event" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                Create Event
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </Link>

              <div className="flex space-x-2 px-3 py-2">
                {user ? (
                  <Button variant="outline" className="flex-1" onClick={signOut}>Sign Out</Button>
                ) : (
                  <>
                    <Button variant="outline" className="flex-1" asChild><Link to="/auth">Sign In</Link></Button>
                    <Button variant="default" className="flex-1" asChild><Link to="/auth">Sign Up</Link></Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
