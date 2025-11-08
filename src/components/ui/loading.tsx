import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3",
  };

  return (
    <div
      className={cn(
        "loading-spinner border-t-primary",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface LoadingButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingButton = ({ isLoading, children, className }: LoadingButtonProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-200"}>
        {children}
      </div>
    </div>
  );
};

