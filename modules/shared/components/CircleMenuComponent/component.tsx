import Image from 'next/image'

import { CIRCLE_MENU } from './constans'
import style from './style.module.scss'

export const CicrleMenuComponent = () => {
    return (
        <div className={style.circleMenu}>
            <div className={style.imageContainer}>
                <Image
                    src={CIRCLE_MENU.image.src}
                    alt={CIRCLE_MENU.image.alt}
                    width={CIRCLE_MENU.image.width}
                    height={CIRCLE_MENU.image.height}
                    className={style.image}
                />
            </div>
            <span className={style.text}>{CIRCLE_MENU.text}</span>
        </div>
    )
}