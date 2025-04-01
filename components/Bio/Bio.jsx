import "./Bio.css"
import { FaMapLocation } from "react-icons/fa6";
import Image from "next/image"

export default function Bio() {

    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);

        let age = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }



    return (
        <div id="bio" className="bio-main">
            <div className="portrait-container">
                <Image className="portrait" alt="An image of the developer" layout="intrinsic" width={200} height={200} src={"/portrait2.jpg"}>
                </Image>
            </div>
            <div className="name-div">Bálint Kovács ({calculateAge("1996-07-22")}) </div>
            <span>Full Stack Developer</span>
            <div className="residence-div">
                <FaMapLocation /> Miskolc, Hungary
            </div>
        </div>
    )
}