import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          'default': "bg-primary/20 text-primary",
          'success': "bg-green-500/20 text-green-600 dark:text-green-400",
          'warning': "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
          'error': "bg-red-500/20 text-red-600 dark:text-red-400"
        }[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
