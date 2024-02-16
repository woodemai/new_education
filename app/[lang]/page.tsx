import { List } from "@/components/shared/list";
import { Item } from "@/components/entities/item";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import AppDescription from "@/components/widgets/app-description/AppDescription";

const renderItem = (page: { name: string, desc: string, href?: string }) => {
    const link = page.href ? page.href : "/";
    return (
        <Item name={page.name} description={page.desc} href={link} key={page.href} />
    )
}

interface Props {
    params: { lang: Locale }
}

const Home = async ({ params: { lang }, }: Props) => {

    const { pagesArr, roadmapArr, pages, roadmap, heading, body } = await getDictionary(lang).then(res => res.home);

    return (
        <>
            <AppDescription heading={heading} body={body} />
            <List items={pagesArr} element={(page) => renderItem(page)} heading={pages} />
            <List items={roadmapArr} element={(task) => renderItem(task)} heading={roadmap} />
        </>
    )
}
export default Home;
