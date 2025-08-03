import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/test">Test</Link>
    </div>
  );
}
