import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplineBackground from "@/components/SplineBackground";
import Home from "./pages/Home";
import MobileSensi from "./pages/MobileSensi";
import PcSensi from "./pages/PcSensi";
import About from "./pages/About";
import PaidSettings from "./pages/PaidSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global background persists across route changes */}
        <SplineBackground />
        {/* UID banner */}
        <div className="fixed top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <div className="mt-2 rounded-full bg-black/40 text-white text-xs md:text-sm px-3 py-1 backdrop-blur-md border border-white/10 shadow-gaming">
            UID: 517202492
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<MobileSensi />} />
          <Route path="/pc" element={<PcSensi />} />
          <Route path="/contact" element={<About />} />
          <Route path="/paid-settings" element={<PaidSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
