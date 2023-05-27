import List from "@/components/List";
import Item from "@/components/Item";

export default function Home() {
    const pages = [
        {
            name: "Courses",
            description: "All courses"
        },
        {
            name: "Profile",
            description: "Your profile",
        },
    ]
    return (
        <>
            <h1>Home</h1>
            <List items={pages} element={(page) => <Item name={page.name} description={page.description} href={`pages/${page.name}`}/>} heading={"Pages"}/>
        </>
    )
}
