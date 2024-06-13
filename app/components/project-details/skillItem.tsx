import { skillData } from '@/app/utils/skillData'
import Image from 'next/image'


export function SkillItem({skillName}:{skillName:string}) {
    const {name , logoUrl}=skillData[skillName]

    return (
        <p tabIndex={0} className='flex flex-col self-start sm:flex-row items-center px-4 py-2 w-32'>
             <span className='px-4 sm:hidden'>{name}</span>
            <span className=" w-8 h-8 relative">
                <Image
                    src={`/images/skills/${logoUrl}`}
                    alt=""
                    width={30}
                    height={30}
                />
            </span>
            <span className='hidden sm:block px-4'>{name}</span>
        </p>
    )
}