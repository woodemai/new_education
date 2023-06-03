import List from "@/components/List";
import Item from "@/components/Item";
import ReactMarkdown from "react-markdown";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

const renderItem = (page: { name: string, description: string, href: string }) => {
    return (
        <Item name={page.name} description={page.description} href={page.href} key={page.href}/>
    )
}
export default async function Home({
                                       params: {lang},
                                   }: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);

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
    const tasks = [
        {
            name: "GitHub",
            description: "Add GitHub provider to NextAuth",
            href: '/'
        },
        {
            name: "Lessons",
            description: "Implement ability to add to lessons links, images, videos and other content",
            href: '/'
        },
        {
            name: "Roles",
            description: "Add roles: Admin, Student, Teacher. Admin and teacher can add lessons, admin also can add courses.",
            href: '/'
        },
    ]
    return (
        <>
            <h1>{dictionary.home.heading}</h1>
            <ReactMarkdown>{dictionary.home.body}</ReactMarkdown>
            <List items={pages} element={(page) => renderItem(page)} heading={dictionary.home.pages}/>
            <List items={tasks} element={(task) => renderItem(task)} heading={dictionary.home.roadmap}/>
        </>
    )
}
