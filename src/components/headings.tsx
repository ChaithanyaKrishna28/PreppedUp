import { cn } from "@/lib/utils";

interface HeadingsProps {
  title: string;
  description?: string;
  isSubHeading?: boolean;
}

// Destructuring the HeadingProps
export const Headings = ({
  title,
  description,
  isSubHeading = false,
}: HeadingsProps) => {
  return (
    <div className="mb-6">
      <h2
        className={cn(
          "text-3xl md:text-4xl text-primary font-bold leading-tight tracking-tight mb-3",
          isSubHeading && "text-lg md:text-xl text-neutral-600 font-medium"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-muted-foreground opacity-70">
          {description}
        </p>
      )}
    </div>
  );
};
