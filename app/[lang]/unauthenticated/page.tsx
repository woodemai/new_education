import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import UnAuth from "@/components/UnAuth";

export default async function UnAuthenticated({params: {lang}}: { params: { lang: Locale } }) {
    const {unauthenticated} = await getDictionary(lang);
    return <UnAuth dictionary={unauthenticated}/>
}