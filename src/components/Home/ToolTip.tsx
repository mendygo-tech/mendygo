"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Bell Anderson",
        designation: "Software Engineer",
        image: "https://ui-avatars.com/api/?name=Bell+Anderson&background=random",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: "https://api.dicebear.com/7.x/lorelei/svg?seed=robert",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: "https://api.dicebear.com/7.x/pixel-art/svg?seed=jane",
    },
];

export default function Tooltip() {
    return (
        <div className="flex md:flex-row items-center justify-center gap-3 w-full text-center md:text-left text-sm text-gray-300 mt-4">
            <AnimatedTooltip items={people} />

            <p className="dark:text-gray-300 text-black ml-10">
                Join <span className="text-black dark:text-white font-semibold">1000+</span> others on the waitlist
            </p>
        </div>
    );
}