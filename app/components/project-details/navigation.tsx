import Image from 'next/image'
import Link from 'next/link'
import chevron from '/public/images/chevron.svg'
import { ProjectDetail as t } from '@/utils/resourceContent';

type NavigationProps ={
    nextLink:string;
    prevLink:string;
}

export function Navigation({nextLink, prevLink}:NavigationProps) {
    const next = decodeURIComponent(nextLink)
    const prev = decodeURIComponent(prevLink)
    return (
        <div className="flex justify-between underline underline-offset-1 my-4">
            <Link href={prev}>
                <Image
                    src={chevron}
                    alt={`${t.goto} ${prev}`}
                    width={16}
                    height={16}
                    className="rotate-180 inline"
                />
                <p className="inline px-2">Prev</p>
            </Link>
            <Link href={next}>
                <p className="inline px-2">Next</p>
                <Image
                    src={chevron}
                    alt={`${t.goto} ${next}`}
                    width={16}
                    height={16}
                    className="inline"
                />
            </Link>
        </div>
    )
}