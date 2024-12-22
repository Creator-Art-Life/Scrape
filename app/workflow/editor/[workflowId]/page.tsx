import { waitFor } from "@/lib/helper/waitFor";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Editor from "../../_components/Editor";

type PageProps = {
  params: { workflowId: string };
};

async function page({ params }: PageProps) {
  const { workflowId } = params;
  const { userId } = await auth();
  if (!userId) return <div>unauthenticated</div>;

  await waitFor(5000);

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) {
    return <div>Workflow not found</div>;
  }

  return <Editor workflow={workflow} />;
}
export default page;
