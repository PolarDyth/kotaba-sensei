import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20 hover:scale-[1.02] focus-visible:ring-primary/50",
        destructive:
          "bg-danger text-white hover:bg-danger/90 hover:shadow-md hover:shadow-danger/20 hover:scale-[1.02] focus-visible:ring-danger/50",
        outline:
          "border border-white/10 bg-transparent hover:bg-surface-alt hover:border-white/20 hover:scale-[1.02] focus-visible:ring-white/20",
        secondary:
          "bg-surface-alt text-text-primary border border-white/5 hover:bg-surface-alt/90 hover:border-white/15 hover:scale-[1.02] focus-visible:ring-white/20",
        ghost:
          "text-text-secondary hover:text-text-primary hover:bg-surface-alt/50 focus-visible:ring-white/20",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-primary/50",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg gap-1.5 px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
