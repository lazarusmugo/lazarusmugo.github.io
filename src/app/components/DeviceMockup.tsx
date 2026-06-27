"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Heart, Sparkles, MessageSquare, ChevronRight } from "lucide-react";

interface DeviceMockupProps {
  type?: "audio" | "video" | "feelings" | "chat";
  screenshotUrl?: string; // If they have an actual screenshot image later
  placeholderText?: string;
  className?: string;
}

export function DeviceMockup({
  type = "audio",
  screenshotUrl,
  placeholderText = "App Screenshot",
  className = "",
}: DeviceMockupProps) {
  // Render mockup content based on the selected screen type
  const renderScreenContent = () => {
    if (screenshotUrl) {
      return (
        <img
          src={screenshotUrl}
          alt={placeholderText}
          className="w-full h-full object-cover select-none"
        />
      );
    }

    switch (type) {
      case "audio":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#1c1825] via-[#100d16] to-[#08060a] text-white p-5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-[#8a3ffc]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[120%] h-[50%] bg-[#d4af37]/5 rounded-full blur-[70px] pointer-events-none" />

            {/* Top Bar Info */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold z-10">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#d4af37]" /> Verse of the Day
              </span>
              <span>KJV Audio</span>
            </div>

            {/* Main Player Visual */}
            <div className="flex-1 flex flex-col justify-center items-center py-4 z-10">
              {/* Spinning Disc or Audio Wave Visual */}
              <div className="relative w-36 h-36 rounded-full bg-slate-900/60 border border-white/5 flex items-center justify-center p-3 mb-6 shadow-2xl">
                <div className="absolute inset-0 rounded-full border border-[#8a3ffc]/20 animate-ping opacity-25" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#8a3ffc]/30" />
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8a3ffc] to-[#3a2947] flex items-center justify-center relative overflow-hidden shadow-inner">
                  <Volume2 className="w-12 h-12 text-white/90 drop-shadow" />
                  {/* Subtle record grooves */}
                  <div className="absolute inset-0 rounded-full border border-black/20" />
                </div>
              </div>

              {/* Personalized Scripture Bubble */}
              <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg text-center space-y-2">
                <span className="text-[10px] text-[#d4af37] font-bold tracking-wider uppercase">John 14:27</span>
                <p className="text-xs leading-relaxed text-slate-100 font-serif italic">
                  "Peace I leave with you, <span className="text-[#e2bf57] font-semibold font-sans">Anna</span>. My peace I give unto you..."
                </p>
                <div className="flex justify-center gap-1.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-[#8a3ffc] rounded-full"
                      animate={{
                        height: [4, i % 2 === 0 ? 16 : 10, 4]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="space-y-4 z-10">
              {/* Progress Slider */}
              <div className="space-y-1">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#8a3ffc]" />
                </div>
                <div className="flex justify-between text-[8px] text-slate-400">
                  <span>01:14</span>
                  <span>02:05</span>
                </div>
              </div>

              {/* Player buttons */}
              <div className="flex justify-between items-center px-4">
                <button className="text-slate-400 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-white transition-colors text-xs">⏮</button>
                  <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all">
                    <Pause className="w-4 h-4 fill-current ml-0" />
                  </button>
                  <button className="text-slate-400 hover:text-white transition-colors text-xs">⏭</button>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors text-[10px] font-bold">1.0x</button>
              </div>
            </div>

            {/* Bottom Bar Indicator */}
            <div className="text-center pt-2 text-[8px] text-white/30 tracking-wider">
              SCREENSHOT: AUDIO PLAYER
            </div>
          </div>
        );

      case "video":
        return (
          <div className="w-full h-full bg-slate-950 text-white flex flex-col justify-between font-sans select-none relative overflow-hidden">
            {/* Video Placeholder (Jesus speaking silhouette) */}
            <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-center pb-12">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-[#100d16]" />
              
              {/* Styled Serene Backdrop */}
              <div className="absolute top-[20%] w-48 h-48 rounded-full bg-amber-500/10 blur-[50px]" />
              <div className="absolute top-[10%] w-60 h-60 rounded-full bg-[#8a3ffc]/20 blur-[60px]" />
              
              {/* Silhouette Illustration of Jesus standing inside glowing aura */}
              <svg className="w-full h-4/5 text-slate-900/90 z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="halo" cx="50%" cy="40%" r="40%">
                    <stop offset="0%" stopColor="#ffd700" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="40" r="18" fill="url(#halo)" className="animate-pulse" />
                <circle cx="50" cy="40" r="8" fill="#1b1a1c" />
                <path d="M50 49 C46 49, 44 54, 43 60 L41 90 L59 90 L57 60 C56 54, 54 49, 50 49 Z" fill="#1b1a1c" />
                <path d="M43 60 C40 64, 38 72, 37 82" stroke="#1b1a1c" strokeWidth="2" strokeLinecap="round" />
                <path d="M57 60 C60 64, 62 72, 63 82" stroke="#1b1a1c" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Subtitles Overlay */}
              <div className="z-20 px-5 text-center w-full max-w-[240px] space-y-1">
                <p className="text-[11px] leading-relaxed text-[#f7e096] drop-shadow-md font-serif">
                  "Behold, Anna, I stand at the door and knock..."
                </p>
                <p className="text-[8px] text-white/60 uppercase tracking-widest font-sans">Revelation 3:20</p>
              </div>
            </div>

            {/* Overlaid UI */}
            <div className="w-full flex justify-between items-center p-4 z-20">
              <span className="text-[9px] bg-red-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white" /> 3D Live
              </span>
              <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs">
                ✨
              </div>
            </div>

            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-100 hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="w-full p-4 flex justify-between text-[8px] text-white/50 z-20 bg-gradient-to-t from-black to-transparent">
              <span>Swipe for Next Verse</span>
              <span>SCREENSHOT: 3D VIDEO</span>
            </div>
          </div>
        );

      case "feelings":
        return (
          <div className="w-full h-full bg-[#f8f9fa] text-slate-800 p-5 flex flex-col justify-between font-sans select-none relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#8a3ffc]/5 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-amber-500/5 blur-2xl" />

            {/* Header */}
            <div className="space-y-1.5 pt-2 z-10">
              <h4 className="text-xs font-bold text-[#8a3ffc] uppercase tracking-wider">Anna,</h4>
              <p className="text-base font-extrabold text-slate-900 tracking-tight leading-tight">
                How is your heart feeling today?
              </p>
              <p className="text-[10px] text-slate-500">Choose an emotion for personalized Scripture</p>
            </div>

            {/* Feelings Selection Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-4 z-10">
              {[
                { label: "Anxious", emoji: "😰", color: "bg-amber-50 border-amber-200 text-amber-800" },
                { label: "Grieving", emoji: "💔", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { label: "Peaceful", emoji: "🕊️", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                { label: "Fearful", emoji: "🛡️", color: "bg-purple-50 border-purple-200 text-purple-800" },
                { label: "Thankful", emoji: "🙌", color: "bg-rose-50 border-rose-200 text-rose-800" },
                { label: "Weary", emoji: "🔋", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`border rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1.5 shadow-sm transition-all duration-300 hover:scale-[1.03] ${item.color}`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-[11px] font-bold">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="z-10 bg-white border border-slate-200/80 rounded-xl p-3 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#8a3ffc]/10 flex items-center justify-center text-[10px]">
                  ✨
                </div>
                <span className="text-[10px] font-bold text-slate-700">Daily Reflection Plan</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="text-center pt-2 text-[8px] text-slate-400 tracking-wider">
              SCREENSHOT: FEELINGS
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="w-full h-full bg-[#f4f3f6] text-slate-800 flex flex-col justify-between font-sans select-none relative">
            {/* Chat Header */}
            <div className="bg-white border-b border-slate-100 px-4 py-3.5 flex items-center gap-2.5 shadow-sm pt-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#8a3ffc] to-[#5a4070] flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                JC
              </div>
              <div>
                <h5 className="text-[11px] font-bold text-slate-900">Bible Guide AI</h5>
                <p className="text-[8px] text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" /> Online
                </p>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-[10.5px]">
              {/* User message */}
              <div className="flex flex-col items-end space-y-1">
                <span className="text-[8px] text-slate-400 pr-1">Anna</span>
                <div className="bg-[#8a3ffc] text-white rounded-2xl rounded-tr-none px-3.5 py-2 max-w-[85%] shadow-sm">
                  What did Jesus say about worrying?
                </div>
              </div>

              {/* Bot response */}
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[8px] text-slate-400 pl-1">Bible Guide AI</span>
                <div className="bg-white text-slate-700 rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[85%] border border-slate-200 shadow-sm leading-relaxed space-y-1.5">
                  <p>
                    In <span className="font-bold text-[#8a3ffc]">Matthew 6:34</span>, Jesus tells you:
                  </p>
                  <p className="italic font-serif text-slate-800 border-l-2 border-[#8a3ffc] pl-2 py-0.5">
                    "Take therefore no thought for the morrow, Anna; for the morrow shall take thought for the things of itself..."
                  </p>
                  <p className="text-[9px] text-slate-500 pt-0.5">
                    He asks you to trust His provision daily, and let go of anxiety.
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-white border-t border-slate-100 p-2.5 flex items-center gap-2">
              <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[10px] text-slate-400 flex justify-between items-center">
                <span>Ask about anxiety, comfort, love...</span>
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#8a3ffc] flex items-center justify-center text-white text-xs shadow">
                ➔
              </div>
            </div>

            <div className="text-center pb-2 text-[8px] text-slate-400 tracking-wider bg-white">
              SCREENSHOT: BIBLE CHAT
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Phone Silhouette Container - Fluid Sizing */}
      <div className="relative mx-auto border-[6px] sm:border-[8px] border-black rounded-[30px] sm:rounded-[38px] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.35)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)] bg-black aspect-[9/19.5] w-full overflow-hidden select-none">
        
        {/* Screen Content Wrapper */}
        <div className={`absolute inset-0 w-full h-full rounded-[23px] sm:rounded-[29px] overflow-hidden bg-slate-900 z-10 ${screenshotUrl ? "" : "pt-4 pb-2"}`}>
          {renderScreenContent()}
        </div>
      </div>
    </div>
  );
}
