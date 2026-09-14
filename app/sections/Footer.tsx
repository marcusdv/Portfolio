const Footer = () => {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                    Desenvolvido por <span className="text-foreground">Marcus Costa</span>
                </p>
                <p className="font-mono text-xs text-muted">&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
