"use client"; // Enables the component to handle client-side interactivity
import cn from "@/util/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

{
	/**Button template dictates: 
    styling
    behavior

    DOES NOT dictate:
    description
    */
}

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	// Absorb Native ButtonElementType to allow button prop control @page.tsx
	children: ReactNode; // React/TS Doc standard
}
//TODO- twMerge step 1- include destructuring "className" from the props
//TODO- twMerge step 3- include destructuring "variant and size" from the cva-declared props
export default function Button({
	children,
	className,
	variant,
	size,
	...props
}: ButtonProps) {
	return (
		<button
			//TODO- twMerge step 2- curly the style
			//TODO- twMerge step 4- pass variant && size
			className={cn(buttonVariants({variant, size, className}))}
			// Apply page's props passed to the button, moved below classNametwMerge so page.tsx-explicit style succeeds previous styling
			{...props}
		>
			{children}
		</button>
	);
}

//TODO- cva step 1- declare variants
const buttonVariants = cva("rounded-md", {
	variants: {
		variant: {
			primary: "border-2 border-white hover:bg-gray-700",
			secondary: "border border-white text-white hover:bg-nuetral-800",
			danger: "border-none border-white text-white hover:bg-red-500",
		},
		size: {
			sm: "text-small px-1 py-0",
			md: "text-base px-2 py-1",
			xl: "text-xl px-4 py-2",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});
