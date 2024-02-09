import { useEffect, useState } from "react";
import { Student } from "../../models/student";

function SearchInput ({functionToExecute, setStudent}: {functionToExecute: (id: number) => Promise<void>, setStudent: React.Dispatch<React.SetStateAction<Student | undefined>>}){
    const [inputText, setInputText] = useState ("");
    const [isTyping, setIsTyping] = useState(false);
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setInputText(event.target.value);
        setStudent ({} as Student)
        setIsTyping(true)
    }

    useEffect(() => {
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
