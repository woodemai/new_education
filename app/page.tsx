import List from "@/components/List";
import Item from "@/components/Item";
import ReactMarkdown from "react-markdown";

export default function Home() {
    const pages = [
        {
            name: "Courses",
            description: "All courses",
            href: '/courses'
        },
        {
            name: "Profile",
            description: "Your profile",
            href: '/profile'
        },
    ]
    return (
        <>
            <h1>Modern Fast Secure</h1>
            <ReactMarkdown>
                New Education is a website for online education. There are a lot of courses on various topics.
            </ReactMarkdown>
            <List items={pages}
                  element={(page) => <Item name={page.name} description={page.description} href={page.href}/>}
                  heading={"Pages"}/>
        </>
    )
}
