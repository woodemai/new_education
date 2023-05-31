import List from "@/components/List";
import Item from "@/components/Item";
import ReactMarkdown from "react-markdown";
const renderItem = (page: {name:string, description: string, href: string}) => {
    return (
        <Item name={page.name} description={page.description} href={page.href}/>
    )
}
export default function Home() {
    const pages = [
        {
            name: "Courses",
            description: "All courses",
            href: '/courses'
        },
        {
            name: "Reviews",
            description: "Comments written by our users",
            href: '/reviews'
        },
        {
            name: "Profile",
            description: "Your profile",
            href: '/profile'
        },
        {
            name: "Settings",
            description: "Settings and preferences",
            href: '/settings'
        },
    ]
    return (
        <>
            <h1>Modern Fast Secure</h1>
            <ReactMarkdown>
                New Education is a website for online education. There are a lot of courses on various topics.
            </ReactMarkdown>
            <List items={pages}
                  element={(page) => renderItem(page)}
                  heading={"Pages"}/>
        </>
    )
}
