"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        " border border-transparent px-6 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:text-green-600 group-data-[variant=line]/tabs-list:data-active:border-b-2 group-data-[variant=line]/tabs-list:data-active:border-b-green-600 group-data-[variant=line]/tabs-list:data-active:bg-green-200 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-green-200  dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}
// function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
//   return (
//     <TabsPrimitive.Tab
//       data-slot="tabs-trigger"
//       className={cn(
//         // الأبعاد والخطوط
//         "inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap cursor-pointer transition-all rounded-t-lg border-b-2 border-transparent -mb-[1px]",
        
//         // الحالة العادية (غير النشط)
//         "bg-transparent text-gray-600 hover:bg-gray-100/70 hover:text-green-600",
        
//         // حالة الـ Active (النشط)
//         "group-data-[variant=line]/tabs-list:data-active:bg-gray-100/80 group-data-[variant=line]/tabs-list:data-active:text-green-600 group-data-[variant=line]/tabs-list:data-active:border-b-green-600 group-data-[variant=line]/tabs-list:data-active:font-semibold group-data-[variant=line]/tabs-list:data-active:shadow-none",
        
//         // إزالة أي شادو أو خواص زائدة
//         "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
//   return (
//     <TabsPrimitive.Tab
//       data-slot="tabs-trigger"
//       className={cn(
//         // Basis & Typography (التنسيق الأساسي)
//         "inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap cursor-pointer transition-all",
        
//         // Shape & Borders (الشكل والحدود الأساسية)
//         "rounded-t-lg border-b-2 border-transparent -mb-[1px]",
        
//         // Inactive State & Hover (الحالة العادية والتحويم)
//         "bg-transparent text-gray-600 hover:bg-gray-100/60 hover:text-green-600",
        
//         // Active State (الSelector الصريح والقوي للحالة النشطة)
//         "data-[state=active]:bg-gray-100",           // خلفية التبويب النشط
//         "data-[state=active]:text-green-600",          // لون نص التبويب النشط
//         "data-[state=active]:border-b-green-600",     // لون الخط السفلي للتبويب النشط
//         "data-[state=active]:font-semibold",          // ثقل الخط للتبويب النشط
//         "data-[state=active]:shadow-none",            // إلغاء أي ظل افتراضي
        
//         // Accessibility & Icons (الوصول والأيقونات)
//         "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        
//         className
//       )}
//       {...props}
//     />
//   )
// }

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
