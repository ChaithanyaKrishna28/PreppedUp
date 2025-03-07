
/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { Button } from "@/components/ui/button";
import { Lightbulb, Sparkles, WebcamIcon } from "lucide-react";
import { InterviewPin } from "@/components/pin";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Webcam from "react-webcam";

export const MockLoadPage = () => {

    const { interviewId } = useParams<{ interviewId: string }>();
    const [interview, setInterview] = useState<Interview | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      setIsLoading(true);
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
            finally{
              setIsLoading(false);
            }
          }
        };
    
        fetchInterview();
      }, [interviewId,navigate]);

      if (isLoading) {
        return <LoaderPage className="w-full h-[70vh]" />;
      }
    
      if (!interviewId) {
        navigate("/generate", { replace: true });
      }
    
      if (!interview) {
        navigate("/generate", { replace: true });
      }




  return (
    <div className="flex flex-col w-full gap-10 py-6 px-6 bg-white shadow-md rounded-lg">
  {/* Header Section */}
  <div className="flex items-center justify-between w-full gap-4">
    <CustomBreadCrumb
      breadCrumbPage={interview?.position || ""}
      breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
    />

    <Link to={`/generate/interview/${interviewId}/start`}>
      <Button size="sm">
        Start <Sparkles className="w-5 h-5" />
      </Button>
    </Link>
  </div>

  {/* Interview Card */}
  {interview && <InterviewPin interview={interview} onMockPage />}

  {/* Alert Box */}
  <Alert className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg flex items-start gap-4 shadow-sm">
    <Lightbulb className="h-6 w-6 text-yellow-600" />
    <div>
      <AlertTitle className="text-yellow-800 font-semibold text-lg">
        Important Information
      </AlertTitle>
      <AlertDescription className="text-sm text-yellow-700 mt-1 leading-relaxed">
        Please enable your webcam and microphone to start the AI-generated mock interview. 
        The interview consists of five questions. You’ll receive a personalized report at the end.  
        <br />
        <br />
        <span className="font-medium">Note:</span> Your video is <strong>never recorded .</strong> You can disable your webcam at any time.
      </AlertDescription>
    </div>
  </Alert>

  {/* Webcam Section */}
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
      {isWebCamEnabled ? (
        <Webcam
          mirrored={true}
          onUserMedia={() => setIsWebCamEnabled(true)}
          onUserMediaError={() => setIsWebCamEnabled(false)}
          className="w-full h-full object-cover rounded-md"
        />
      ) : (
        <WebcamIcon className="w-20 h-20 text-muted-foreground" />
      )}
    </div>
  </div>

  {/* Webcam Toggle Button */}
  <div className="flex items-center justify-center">
    <Button onClick={() => setIsWebCamEnabled(!isWebCamEnabled)}>
      {isWebCamEnabled ? "Disable Webcam" : "Enable Webcam"}
    </Button>
  </div>
</div>

  )
}
