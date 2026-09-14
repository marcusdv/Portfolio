const links = [
    { href: "#projetos", label: "Projetos" },
    { href: "#curriculo", label: "Currículo" },
    { href: "#contato", label: "Contato" },
];

function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
                <a href="#" className="text-sm font-medium tracking-tight">
                    Marcus Costa
                </a>
                <nav className="flex items-center gap-6">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
