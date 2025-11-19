import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Candidat from "./pages/Candidat";
import Alliance from "./pages/Alliance";
import Programme from "./pages/Programme";
import Communiques from "./pages/Communiques";
import Actualites from "./pages/Actualites";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/candidat" element={<Candidat />} />
          <Route path="/alliance" element={<Alliance />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/communiques" element={<Communiques />} />
          <Route path="/actualites" element={<Actualites />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
