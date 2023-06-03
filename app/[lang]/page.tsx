import List from "@/components/List";
import Item from "@/components/Item";
import ReactMarkdown from "react-markdown";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

const renderItem = (page: { name: string, desc: string, href?: string }) => {
    const link = page.href ? page.href : "/";
    return (
        <Item name={page.name} description={page.desc} href={link} key={page.href}/>
    )
}
export default async function Home({
                                       params: {lang},
                                   }: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);

    const pages = dictionary.home.pagesArr;
    const tasks = dictionary.home.roadmapArr;
    return (
        <>
            <h1>{dictionary.home.heading}</h1>
            <ReactMarkdown>{dictionary.home.body}</ReactMarkdown>
            <List items={pages} element={(page) => renderItem(page)} heading={dictionary.home.pages}/>
            <List items={tasks} element={(task) => renderItem(task)} heading={dictionary.home.roadmap}/>
        </>
    )
}
