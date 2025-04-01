import "./StackButton.css"
import Image from "next/image"

export default function StackButton({ stackName, stackImg, alt }) {
    return (
        <div className="tech-stack-button">
            <button>
                <div className="button-image">
                    <Image alt={alt} width={30} height={30} src={stackImg}></Image>
                </div>
                <div className="button-name">
                    {stackName}
                </div>
            </button>
        </div>
    )
}