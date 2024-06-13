import { Link } from "react-router-dom";
import { getData } from "../Config/Firebasemethod";
import { useEffect } from "react";

export default function Homepage() {
  const questions: any = [
    {
      question: "what you like to eat",
      answer: ["Pizza", "Burger", "Pasta"],
    },
  ];
  const getquestion = () => {
    getData('question');
  };
  useEffect(() => {
    getquestion() 
  }, []);

  return (
    <>
      <h1 className="text-center text-primary">Home</h1>
      <div>
        {questions.map((val: any, ind: any) => (
          <>
            <p>{val.question}</p>
            {val.answer.map((a: any, b: any) => (
              <p>{a}</p>
            ))}
          </>
        ))}
      </div>
      <Link to="/questions" className="btn btn-primary">
        Questions
      </Link>
      <br />
      <br />
      <Link to="/answers/id" className="btn btn-primary">
        Answer
      </Link>
    </>
  );
}

