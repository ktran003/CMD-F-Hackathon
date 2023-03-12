import TextSummarizer from "./TextSummarizer"

 export default function Home() {
    // let Component 
    // switch (window.location.pathname) {
    //   case "/textsummarizer":
    //     Component = TextSummarizer
    //     break
    // }
    return 
    <div>
    <h1>Home</h1>
        {/* <CustomLink href="/textsummarizer">HOME</CustomLink> */}
    </div>
}

// function CustomLink ({href, children, ...props}) {
//     const path = window.location.pathname
//     return (
//     <li className= {path === href ? "active" : ""}>
//         <a href={href} {...props}>{children}</a>
//     </li>
//     )
// }