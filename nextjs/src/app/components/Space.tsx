
import { cn } from "@/utils/cn"

export function SpaceTop({size}: {size: number}) {

    return <div className={cn({
        'pt-3': size === 3,
        'pt-4': size === 4,
        'pt-5': size === 5,
        'pt-6': size === 6,
        'pt-7': size === 7,
        'pt-8': size === 8,
        'pt-9': size === 9,
        'pt-10': size === 10,
    })}></div>
}