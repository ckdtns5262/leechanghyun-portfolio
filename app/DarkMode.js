'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DarkMode() {
    const router = useRouter()


    let cookieValue = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
    useEffect(() => {
        if (cookieValue == '') {
            document.cookie = 'mode=ligh; max-age=' + (3600 * 24 * 400)
        }

    }, [])



    return (
        <div className="flex absolute z-40 text-white ">
            <button 
            onClick={() => {
                if (cookieValue == 'light') {
                    document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
                    router.refresh()
                } else {
                    document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
                    router.refresh()
                }

            }}
                className="flex ml-[95vw]">{cookieValue== 'light' ? '🌑Dark' : '🌕Light'}</button>

        </div>
    )
}