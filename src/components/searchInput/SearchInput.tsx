import { useEffect, useState } from "react";
import { Student } from "../../models/student";

function SearchInput ({functionToExecute, setStudent}: {functionToExecute: (id: number) => Promise<void>, setStudent: React.Dispatch<React.SetStateAction<Student | undefined>>}){
    const [inputText, setInputText] = useState ("");
    const [isTyping, setIsTyping] = useState(false);
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setInputText(event.target.value); // sets the user input to the query to be executed
        setStudent ({} as Student) //sets the student to empty in order to avoid showing previous results
        setIsTyping(true) // sets the isTyping to help handling the student search
    }

    useEffect(() => { //handles the input of the input field to avoid sending many requests to database
        if (isTyping) {
            const timerId = setTimeout(() => {
                functionToExecute(+inputText);
                setIsTyping(false);
            }, 500)
            return () => clearTimeout(timerId)
        }
    }, [inputText])

    return (
        <div className="">
            <input className="col-12 p-1" type="number" placeholder="Search by student ID..." onChange={(event)=> {onChangeHandler(event)}} />
        </div>
    )
}

export default SearchInput;
