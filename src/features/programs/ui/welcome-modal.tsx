"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trophy, Target, Calendar, Zap, X } from "lucide-react";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoin: () => void;
  programTitle: string;
  programLevel: string;
  programDuration: string;
  programFrequency: string;
}

export function WelcomeModal({
  isOpen,
  onClose,
  onJoin,
  programTitle,
  programLevel,
  programDuration,
  programFrequency,
}: WelcomeModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Trigger confetti animation
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#4F8EF7", "#25CB78", "#FFD700"],
        });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleJoin = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.5 },
      colors: ["#4F8EF7", "#25CB78", "#FFD700"],
    });
    setTimeout(() => {
      onJoin();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          <X className="text-gray-500" size={20} />
        </button>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header with mascot */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 mx-auto relative animate-bounce">
                <Image
                  alt="WorkoutCool Mascot"
                  className="object-contain"
                  height={96}
                  src="/images/emojis/WorkoutCoolSwag.png"
                  width={96}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center animate-pulse">
                <Trophy className="text-white" size={16} />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#4F8EF7] to-[#25CB78] bg-clip-text text-transparent">
              Bienvenue dans {programTitle} !
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Prépare-toi à repousser tes limites ! 💪</p>
          </div>

          {/* Program quick info */}
          <div className="bg-gradient-to-r from-[#4F8EF7]/10 to-[#25CB78]/10 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4F8EF7] rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Niveau</p>
                <p className="font-semibold text-gray-900 dark:text-white">{programLevel}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#25CB78] rounded-lg flex items-center justify-center">
                <Calendar className="text-white" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Durée</p>
                <p className="font-semibold text-gray-900 dark:text-white">{programDuration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4F8EF7] rounded-lg flex items-center justify-center">
                <Target className="text-white" size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Fréquence</p>
                <p className="font-semibold text-gray-900 dark:text-white">{programFrequency}</p>
              </div>
            </div>
          </div>

          {/* Tips */}
          {/* <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
            <div className="flex gap-3">
              <Image alt="Tip" className="object-contain" height={32} src="/images/emojis/WorkoutCoolHappy.png" width={32} />
              <div className="text-sm">
                <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Astuce du coach</p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Commence doucement et augmente l&apos;intensité progressivement. La régularité est la clé du succès !
                </p>
              </div>
            </div>
          </div> */}

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1" onClick={onClose} size="large" variant="outline">
              Plus tard
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-[#4F8EF7] to-[#25CB78] hover:from-[#4F8EF7]/80 hover:to-[#25CB78]/80 text-white border-0"
              onClick={handleJoin}
              size="large"
            >
              C&apos;est parti !
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
