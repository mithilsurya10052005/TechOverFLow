"use client";

import { toast } from "sonner";
import { incrementViews } from "@/lib/actions/question.action";
import { useEffect } from "react";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });

   if (result.success) {
  toast.success("Views incremented", {
    description: "Success",
  });
} else {
  toast.error("Error", {
    description: result.error?.message,
  });
}
  };

  useEffect(() => {
    handleIncrement();
  }, []);

  return null;
};

export default View;