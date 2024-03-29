import Item from "@/components/entities/item/Item";

export default function RoadmapItem(
    {name, description, href}:
        { name: string, description: string, href: string }) {
    return <Item name={name} description={description} href={href}></Item>
}