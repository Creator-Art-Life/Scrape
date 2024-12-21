import { ExecutionEnvironment } from "@/types/executor";
import { PageToHtmlTask } from "../task/PageToHtml";

export async function PageToHtmlExecutor(
  environment: ExecutionEnvironment<typeof PageToHtmlTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput("Web page");
    console.log("@@WEB SITE", websiteUrl);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}