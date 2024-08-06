import classes from "./Footer.module.css";
import { ArrowUp } from "lucide-react";
import Button from "./Button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a href="#">See My Portfolio Page</a>
        </li>
        <li>
          <Button onClick={scrollToTop}>            
              <ArrowUp />      
          </Button>
        </li>
      </ul>
      <p>&copy; 2024 Aneta Falkowska. All rights reserved.</p>
    </footer>
  );
}
