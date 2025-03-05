import { FormMockInterview } from "@/components/form-mock-interview"
import { db } from "@/config/firebase.config"
import { Interview } from "@/types"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const CreateEditPage = () => {
// used for getting the speacific interview id from the url itself
    const {interviewId} = useParams<{interviewId:string}>()
    // Interview is in the types
    const [interview,setInterview] = useState<Interview | null>(null)

    useEffect(() => {
        const fetchInterview = async () => {
          if (interviewId) {
            try {
              const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
              if (interviewDoc.exists()) {
                setInterview({
                  id: interviewDoc.id,
                  ...interviewDoc.data(),
                } as Interview);
              }
            } catch (error) {
              console.log(error);
            }
          }
        };
    
        fetchInterview();
      }, [interviewId]);

  return (
    <div className="my-4 flex-col w-full">
        <FormMockInterview initialData ={interview}/>
    </div>
  )
}
