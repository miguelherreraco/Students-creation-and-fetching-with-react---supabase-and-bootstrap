import { useState } from "react";
import { Student } from "../models/student";
import supabase from "../service/supabase";

const useSupabase =() =>{
    const [student, setStudent] = useState<Student>()
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("There's no students to show");


    const getStudent = async (id: number) =>{
        console.log(id, "id")
        setIsFetching(true); //indicates that there're students fetching 
        setError(""); // sets the error message to empty 
        try{
        const {data} = await supabase.from("students").select('*').eq('id', id).single(); //fetches a single student by ID
        if (!data) 
            throw new Error("Student not found...") // if data fetching didn't get any data, then throws an error
        if (data)
            setStudent(data)  // sets the student to show in the card          
        }catch(error ){
            if (error instanceof Error)
                setError(error.message) //sets the error message to be shown on screen
        }finally{
            setIsFetching(false) // sets the fetching state to false to re-render the component
        }
        
      }

    const createStudent = async ( fullName: string, email: string, course: string) => {
        try{
            const { data, error } = await supabase
                .from("students")
                .upsert({full_name: fullName, e_mail: email, course: course})
                .select()
                //creates a new student and returns it in data constant
                
                if(error)
                    throw new Error(error.message) //throws the error if exists
                if (data)
                    alert(`${data[0].full_name} was created with id: ${data[0].id}`) // display an alert indicating the ID of the just created student
        } catch (e) {
            if (e instanceof Error){
                setError(e.message)
                alert(error) //alerts the error
            }
        } 
}
return {getStudent, isFetching, error, student, setStudent, createStudent}
}
export default useSupabase;

