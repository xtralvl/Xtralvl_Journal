import { useState } from 'react';
import FAQComponent from '../components/FAQPageComponents/FAQComponent';

interface FAQPageProps {
    handlePage: (page: string) => void;
};


const questions: string[] = [
    "What is an adventure? What is a skill?",
    "Will my logs stay if I clear my browser history?"

];

const answers: string[] =[
    "Whatever you consider it as. More clearly, an adventure — based on its subcategory — could be something like an ATV ride in Transylvania, or even just in your own backyard. But this can also be a skill if you learned how to handle an ATV. Other examples of adventures: skiing down Mount Fuji, skydiving above Zanzibar — but it can be anything that feels like an adventure to you, such as playing hide-and-seek with your children or visiting a circus with your sibling. Examples of skills: learning basic yoga poses (which can also be an adventure, like taking part in a yoga class), learning how to ride a horse, or running your first half marathon, etc.",
    "Right now, this application doesn’t have a profile feature yet, so your logs and data will be lost if you clear your browsing history."
];


export default function FAQPage({handlePage}: FAQPageProps) {

    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        openId === id ? setOpenId(null) : setOpenId(id)
    }

    return (
        <div className="faqpage-container">
            <div className='faq-page-content'>

            <button onClick={() => handlePage("home")} className="back-button-faqpage" ><img src="/next-icon.svg" alt="" /></button>

            <h1>Frequently asked questions</h1>

            {questions.map((q, id) => {
                return (
                    <>
                    <FAQComponent
                        key={id}
                        question={q}
                        answer={answers[id]}
                        id={id}
                        isOpen={openId === id}
                        onToggle={() => handleToggle(id)}
                    />
                    </>
                )
            })}
            </div>
        </div>
    )
}