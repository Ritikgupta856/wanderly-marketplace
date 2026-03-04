import Container from './Container';

const Footer = () => {
  return (
    <footer className="mt-16 w-full border-t">
      <Container className="flex flex-col items-center justify-between py-6 text-sm text-neutral-500 md:flex-row">
        <span>© {new Date().getFullYear()} Wanderly. All rights reserved.</span>

        <div className="mt-2 flex cursor-pointer items-center gap-6 text-neutral-600 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
