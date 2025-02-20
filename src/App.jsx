import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./page/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./page/Portfolio/Portfolio";
import { Activity } from "lucide-react";
import Wallet from "./page/Wallet/Wallet";
import PaymentDetails from "./page/PaymentDetails/PaymentDetails";
import SearchCoin from "./page/Search/SearchCoin";
import Watchlist from "./page/Watchlist/Watchlist";
import Profile from "./page/Profile/Profile";
import StockDetails from "./page/Stock Details/StockDetails";
import NotFound from "./page/Notfound/Notfound";
import Auth from "./page/Auth/Auth";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Home from "./page/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Auth/>
      
      {true && <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/market/:id" element={<StockDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          {/* <Route path = "/withdrawal" element = {<Withdrawal />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>}
    </>
  );
}

export default App;
