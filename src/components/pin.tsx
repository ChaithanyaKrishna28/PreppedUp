import { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Sparkles } from "lucide-react";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();

  const interviewDate = new Date(interview?.createdAt.toDate());
  const formattedDate = interviewDate.toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  const formattedTime = interviewDate.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });
  // hover:shadow-md
  return (
    <Card className="p-4 rounded-md shadow-none  bg-black cursor-pointer transition-all space-y-4  hover:bg-gray-800">
      {/* Title with distinct color */}
      <CardTitle className="text-lg text-cyan-300 font-semibold">{interview?.position}</CardTitle>

      {/* Description with distinct color */}
      <CardDescription className="text-gray-300 font-medium">{interview?.description}</CardDescription>

      <div className="w-full flex items-center gap-2 flex-wrap">
        {/* Tech stack badges with hover effects */}
        {interview?.techStack.split(',').map((word, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
          >
            {word}
          </Badge>
        ))}
      </div>

      {/* Footer with date, time, and action buttons */}
      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        {/* Date and time with distinct color and font weight */}
        <p className="text-[12px] text-gray-400 font-light truncate whitespace-nowrap">
          {`${formattedDate} - ${formattedTime}`}
        </p>

        {!onMockPage && (
          <div className="flex items-center justify-center space-x-2">
          {/* Tooltip button for 'View' */}
          <div className="bg-[#ffff] rounded-md shadow-lg cursor-pointer">
            <TooltipButton
              content="View"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/${interview?.id}`, { replace: true });
              }}
              disbaled={false}
              buttonClassName="hover:text-sky-500 font-semibold"
              icon={<Eye />}
              loading={false}
            />
          </div>
        
          {/* Tooltip button for 'Feedback' */}
          <div className="bg-[#ffff] hover:bg-[#b1abab]  rounded-md shadow-lg cursor-pointer">
            <TooltipButton
              content="Feedback"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/feedback/${interview?.id}`, { replace: true });
              }}
              disbaled={false}
              buttonClassName="hover:text-yellow-500 font-semibold"
              icon={<Newspaper />}
              loading={false}
            />
          </div>
        
          {/* Tooltip button for 'Start' */}
          <div className="bg-[#ffff] hover:bg-[#b1abab]  rounded-md shadow-lg cursor-pointer">
            <TooltipButton
              content="Start"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/interview/${interview?.id}`, { replace: true });
              }}
              disbaled={false}
              buttonClassName="hover:text-cyan-300 font-semibold"
              icon={<Sparkles />}
              loading={false}
            />
          </div>
        </div>
        
        )}
      </CardFooter>
    </Card>
  );
};
