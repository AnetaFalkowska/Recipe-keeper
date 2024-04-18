export default function Button({ children, className, textOnly }) {
  let classes= textOnly ? "text-button" : "button"

  return <button className={classes}>{children}</button>;
}
