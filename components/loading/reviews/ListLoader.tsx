import ComponentLoad from "@/components/loading/ComponentLoad";
import HeadingLoad from "@/components/loading/HeadingLoad";

export default function ListLoader () {
    return (
        <>
            <HeadingLoad/>
            <ComponentLoad/>
            <ComponentLoad/>
            <ComponentLoad/>
            <ComponentLoad/>
        </>
    )
}