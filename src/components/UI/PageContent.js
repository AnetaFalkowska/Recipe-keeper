import classes from "./PageContent.module.css"

export default function PageContent({title, children}) {
    return(
    <div className={classes.page}>
        <h2>{title}</h2>
        <div className={classes.content}>{children}</div>
    </div>)
}