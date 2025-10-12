interface FAQProps {
    question: string;
    answer: string;
    id: number;
    isOpen: boolean;
    onToggle: () => void;
};

export default function FAQComponent(props: FAQProps) {
    return (
        <div>
            <div onClick={props.onToggle} className="question-wrapper">
                <h2>{`"${props.question}"`}</h2>
                <button onClick={props.onToggle} className="toggle-icon">
                    <img 
                        className={props.isOpen ? "open" : "closed"} 
                        src="/next-icon.svg" 
                        alt="" 
                    />
                </button>
            </div>
            <h3 className={`answer ${props.isOpen ? "answer-displayed" : "answer-hidden"}`}>
            {`"${props.answer}"`}
            </h3>
        </div>
    )
}
