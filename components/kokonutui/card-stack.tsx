"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Stack
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Specification {
    label: string;
    value: string;
}

interface CardItem {
    id: string;
    title: string;
    subtitle: string;
    description?: string;
    label?: string;
    image?: string;
    accent?: string;
    specs: Specification[];
}

// Default content falls back to the original Kokonut UI sample.
const defaultItems: CardItem[] = [
    {
        id: "instant-pay",
        title: "Quick Pay",
        subtitle: "Instant Transfers",
        description: "Experience the iconic design that revolutionized technology",
        image: "/undraw.svg",
        specs: [
            { label: "Speed", value: "Instant" },
            { label: "Security", value: "256-bit" },
            { label: "Limit", value: "$50,000" },
            { label: "Fee", value: "0.5%" },
        ],
    },
    {
        id: "crypto-pay",
        title: "Crypto Pay",
        subtitle: "Web3 Payments",
        description: "Experience the iconic design that revolutionized technology",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Network", value: "Multi-chain" },
            { label: "Gas", value: "Optimized" },
            { label: "Support", value: "24/7" },
            { label: "Security", value: "Top-tier" },
        ],
    },
    {
        id: "business-pay",
        title: "Business Pay",
        subtitle: "Enterprise Solutions",
        description: "Experience the iconic design that revolutionized technology",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Volume", value: "Unlimited" },
            { label: "API", value: "REST/SDK" },
            { label: "Support", value: "Premium" },
            { label: "Features", value: "Custom" },
        ],
    },
    {
        id: "global-pay",
        title: "Global Pay",
        subtitle: "International Transfers",
        description: "Experience the iconic design that revolutionized technology",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&auto=format&fit=crop&q=80",
        specs: [
            { label: "Countries", value: "180+" },
            { label: "FX Rate", value: "Real-time" },
            { label: "Speed", value: "Same-day" },
            { label: "Support", value: "Local" },
        ],
    },
];

interface CardProps {
    item: CardItem;
    index: number;
    totalCards: number;
    isExpanded: boolean;
}

const gradientPalette = [
    "linear-gradient(135deg, rgba(14,165,233,0.35), rgba(14,116,144,0.65))",
    "linear-gradient(135deg, rgba(236,72,153,0.45), rgba(124,58,237,0.65))",
    "linear-gradient(135deg, rgba(52,211,153,0.45), rgba(16,185,129,0.65))",
    "linear-gradient(135deg, rgba(250,204,21,0.5), rgba(249,115,22,0.65))",
];

const Card = ({ item, index, totalCards, isExpanded }: CardProps) => {
    // Calculate center offset based on total cards
    const centerOffset = (totalCards - 1) * 5;

    // Initial stacked position - centered with slight overlap
    const defaultX = index * 10 - centerOffset;
    const defaultY = index * 2;
    const defaultRotate = index * 1.5;
    const defaultScale = 1;

    // Calculate the total width of expanded cards and center offset
    const cardWidth = 320; // Width of each card
    const cardOverlap = 240; // Amount of overlap between cards
    const totalExpandedWidth =
        cardWidth + (totalCards - 1) * (cardWidth - cardOverlap); // Total width including overlap
    const expandedCenterOffset = totalExpandedWidth / 2;

    // Fanned out position - centered spread with overlap
    const spreadX =
        index * (cardWidth - cardOverlap) -
        expandedCenterOffset +
        cardWidth / 2;
    const spreadY = 0;
    const spreadRotate = index * 5 - (totalCards - 1) * 2.5; // Increased rotation for better visual effect
    const spreadScale = 1;

    return (
        <motion.div
            initial={{
                x: defaultX,
                y: defaultY,
                rotate: defaultRotate,
                scale: defaultScale,
            }}
            animate={{
                x: isExpanded ? spreadX : defaultX,
                y: isExpanded ? spreadY : defaultY,
                rotate: isExpanded ? spreadRotate : defaultRotate,
                scale: isExpanded ? spreadScale : defaultScale,
                zIndex: totalCards - index,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                mass: 0.8,
                restDelta: 0.001,
                restSpeed: 0.001,
            }}
            className={cn(
                "absolute inset-0 rounded-2xl p-6 w-full",
                "bg-gradient-to-br from-white/40 via-neutral-50/30 to-neutral-100/20",
                "dark:from-neutral-800/40 dark:via-neutral-900/30 dark:to-black/20",
                "border border-white/20 dark:border-neutral-800/20",
                "before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-gradient-to-b before:from-white/20 before:via-neutral-100/10 before:to-transparent",
                "dark:before:from-white/5 dark:before:via-neutral-500/5 dark:before:to-transparent",
                "before:opacity-100 before:transition-opacity before:duration-500",
                "after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-br",
                "after:from-white/80 after:to-neutral-100/70 dark:after:from-neutral-900/80 dark:after:to-black/70",
                "after:z-[-1] after:blur-xl",
                "backdrop-blur-xl backdrop-saturate-150",
                "shadow-[0_8px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_20px_rgb(0,0,0,0.3)]",
                "hover:border-white/30 dark:hover:border-neutral-700/30",
                "hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]",
                "hover:backdrop-blur-2xl",
                "hover:bg-gradient-to-br hover:from-white/50 hover:via-neutral-50/40 hover:to-neutral-100/30",
                "dark:hover:from-neutral-800/50 dark:hover:via-neutral-900/40 dark:hover:to-black/30",
                "transition-all duration-500 ease-out",
                "transform-gpu overflow-hidden"
            )}
            style={{
                maxWidth: "320px",
                transformStyle: "preserve-3d",
                perspective: "2000px",
                left: "50%",
                marginLeft: "-160px",
                transform: isExpanded
                    ? ""
                    : `
                        translateY(${index * 10}px)
                        translateX(${index * 1}px)
                        rotate(${index * 3}deg)
                        scale(${1 - index * 0.02})
                    `,
                zIndex: totalCards - index,
            }}
        >
            {/* Inner Card */}
            <div className="absolute inset-1 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50" />

            <div className="relative z-10">
                {item.label ? (
                    <div className="mb-3 inline-flex items-center rounded-full bg-neutral-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-100 shadow-sm shadow-black/30 dark:bg-neutral-100/10 dark:text-white">
                        {item.label}
                    </div>
                ) : null}

                {/* Specs Grid moved to top */}
                <dl className="mb-4 grid grid-cols-4 gap-2 justify-center">
                    {item.specs.map((spec) => (
                        <div
                            key={spec.label}
                            className="text-[10px] backdrop-blur-sm flex flex-col items-start text-left"
                        >
                            <dd className="font-medium text-gray-500 dark:text-gray-400 w-full text-left">
                                {spec.value}
                            </dd>
                            <dt className="text-gray-900 dark:text-gray-100 mb-0.5 w-full text-left">
                                {spec.label}
                            </dt>
                        </div>
                    ))}
                </dl>

                <div
                    className={cn(
                        "aspect-[16/11] w-full overflow-hidden rounded-lg",
                        "bg-neutral-100 dark:bg-neutral-900",
                        "transition-transform duration-300 ease-out",
                        "group-hover:scale-[1.02]",
                        "border border-neutral-200/50 dark:border-neutral-700/50",
                        "shadow-inner"
                    )}
                >
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    ) : (
                        <div
                            className="h-full w-full"
                            style={{
                                background:
                                    item.accent ||
                                    gradientPalette[index % gradientPalette.length],
                                backgroundSize: "160% 160%",
                            }}
                        />
                    )}
                </div>

                <div className="mt-4">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
                            {item.title}
                        </h2>
                        <span className="block text-3xl font-semibold tracking-tight bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 dark:from-gray-200 dark:via-white dark:to-gray-300 bg-clip-text text-transparent text-left">
                            {item.subtitle}
                        </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-left">
                        {item.description ||
                            "Experience the iconic design that revolutionized technology"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

interface CardStackProps {
    items?: CardItem[];
    className?: string;
}

export default function CardStackExample({ items, className }: CardStackProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cards = items?.length ? items : defaultItems;

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
        <button
            className={cn(
                "relative mx-auto cursor-pointer",
                "min-h-[440px] w-full max-w-[90vw]",
                "md:max-w-[1200px]",
                "appearance-none bg-transparent border-0 p-0",
                "flex items-center justify-center mb-8",
                className
            )}
            onClick={handleToggle}
            aria-label="Toggle card stack"
            type="button"
        >
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    item={card}
                    index={index}
                    totalCards={cards.length}
                    isExpanded={isExpanded}
                />
            ))}
        </button>
    );
}
