import Container from "./Container";

const Footer = () => {
    return (
        <footer className="w-full border-t mt-16">
            <Container className="flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500 py-6 ">
                <span>
                    © {new Date().getFullYear()} Wanderly. All rights reserved.
                </span>

                <div className="mt-2 md:mt-0 flex items-center gap-6 text-neutral-600 cursor-pointer">
                    <span>Privacy Policy</span>
                    <span>Terms</span>
                    <span>Cookies</span>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;