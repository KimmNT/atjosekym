import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../views/Test/Test";

export const Route = createLazyFileRoute("/test")({
  component: Test,
});
