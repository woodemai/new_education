import { memo } from "react";

interface Props {
    contactUs: string,
    rights: string,
    issue: string
}

const Footer = memo(function Footer({ contactUs, rights, issue }: Props) {
    return (
        <footer>
            <nav>
                <span>{contactUs} - <a
                    href="mailto: n.savchenkoo73@gmail.com">n.savchenkoo73@gmail.com</a></span>
                <span>{issue} <a
                    href="https://github.com/woodemai/new_education_nextjs13/issues/new/choose"
                    target="_blank">GitHub</a></span>
                <span>new education 2023 - {rights}</span>
            </nav>
        </footer>
    )
})
export default Footer;