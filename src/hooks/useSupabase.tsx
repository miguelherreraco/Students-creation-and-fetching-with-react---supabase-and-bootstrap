import { useState } from "react";
import { Student } from "../models/student";
import supabase from "../service/supabase";

const useSupabase =() =>{
    const [student, setStudent] = useState<Student>()
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState("There's no students to show");
    const [message, setMessage] = useState<string>();


    const getStudent = async (id: number) =>{
        console.log(id, "id")
        setIsFetching(true);
        setError("");
        setMessage("")
        try{
        const {data} = await supabase.from("students").select('*').eq('id', id).single();
        if (!data) 
            throw new Error("Student not found...")
        if (data)
            setStudent(data)            
        }catch(error ){
            if (error instanceof Error)
                setError(error.message)
        }finally{
            setIsFetching(false)
        }
        
      }

    const createStudent = async ( fullName: string, email: string, course: string) => {
        setIsFetching(true);
        setError("");
        setMessage("");
        try{
            const { data, error } = await supabase
                .from("students")
                .upsert({full_name: fullName, e_mail: email, course: course})
                .select()
                
                setStudent({} as Student)
                if(error)
                throw new Error(error.message)
                if (data)
                    alert(`${data[0].full_name} was created with id: ${data[0].id}`)
            setMessage("Student created successfully")
        } catch (e) {
            if (e instanceof Error)
                setError(e.message)
        }finally{
            setIsFetching(false)
        }
    } 
    return {getStudent, isFetching, error, student, setStudent, createStudent, message}


}
export default useSupabase;

