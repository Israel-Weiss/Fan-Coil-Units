import { useState } from "react"
import { AboutEn } from "../cmps/about-en"
import { AboutHe } from "../cmps/about-he"

export const About = () => {
    const [trans, setTrans] = useState(false)

    const language = (val) => setTrans(val)

    return <div className="about">
        {!trans && < AboutEn language={language} />}
        {trans && < AboutHe language={language} />}
    </div>
}