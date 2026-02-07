import Image from "next/image"
import NotFoun from "./assets/404.png"

const NotFound = () => {
    return (
        <div className="pt-35 sm:pt-30 lg:mt-25">
            <div className="text-center flex justify-center">
                <Image className="max-w-[500px] w-full" src={NotFoun} alt="not" />
            </div>
        </div>
    )
}

export default NotFound