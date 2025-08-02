import { createLazyFileRoute } from "@tanstack/react-router";
import About from "../views/About/About";

export const Route = createLazyFileRoute("/about")({
  component: About,
});
