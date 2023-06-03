export default function Footer({dictionary}: {
    dictionary: {
        contactUs: string,
        rights: string,
    }
}) {
    return (
        <footer>
            <nav>
                <span>{dictionary.contactUs}- <a
                    href="mailto: n.savchenkoo73@gmail.com">n.savchenkoo73@gmail.com</a></span>
                <span>new education 2023 - {dictionary.rights}</span>
            </nav>
        </footer>
    )
}