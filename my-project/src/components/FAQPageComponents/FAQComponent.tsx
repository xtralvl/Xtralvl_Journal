interface FAQProps {
    question: string;
    answer: string;
    id: number;
    isOpen: boolean;
    onToggle: () => void;
  }
  
  export default function FAQComponent(props: FAQProps) {
    return (
      <div className="faq-item">
        <div 
          onClick={props.onToggle} 
          className="question-wrapper"
          role="button"
          aria-expanded={props.isOpen}
          aria-controls={`faq-answer-${props.id}`}
          tabIndex={0} // makes div focusable
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") props.onToggle(); }}
        >
          <h2>{props.question}</h2>
          <button 
            onClick={props.onToggle} 
            className="toggle-icon"
            aria-label={props.isOpen ? "Collapse answer" : "Expand answer"}
          >
            <img
              className={props.isOpen ? "open" : "closed"}
              src="/next-icon.svg"
              alt="" // decorative, so empty alt is correct
            />
          </button>
        </div>
  
        <div
          id={`faq-answer-${props.id}`}
          className={`answer ${props.isOpen ? "answer-displayed" : "answer-hidden"}`}
          role="region"
          aria-labelledby={`faq-question-${props.id}`}
        >
          <p>{props.answer}</p>
        </div>
      </div>
    );
  }
  