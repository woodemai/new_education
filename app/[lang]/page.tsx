import { List } from "@/components/shared/list";
import { Item } from "@/components/entities/item";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";

const renderItem = (page: { name: string, desc: string, href?: string }) => {
    const link = page.href ? page.href : "/";
    return (
        <Item name={page.name} description={page.desc} href={link} key={page.href} />
    )
}
const Home = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const dictionary = await getDictionary(lang);

    const pages = dictionary.home.pagesArr;
    const tasks = dictionary.home.roadmapArr;
    return (
        <>
            <h1>{dictionary.home.heading}</h1>
            <p>{dictionary.home.body}</p>
            <List items={pages} element={(page) => renderItem(page)} heading={dictionary.home.pages} />
            <List items={tasks} element={(task) => renderItem(task)} heading={dictionary.home.roadmap} />
        </>
    )
}
export default Home
