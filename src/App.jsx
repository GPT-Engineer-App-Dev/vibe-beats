import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Music, Library, Playlist } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Browse from "./pages/Browse.jsx";
import LibraryPage from "./pages/Library.jsx";
import PlaylistPage from "./pages/Playlist.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Browse",
    to: "/browse",
    icon: <Music className="h-4 w-4" />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <Library className="h-4 w-4" />,
  },
  {
    title: "Playlists",
    to: "/playlists",
    icon: <Playlist className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="browse" element={<Browse />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path="playlists" element={<PlaylistPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;