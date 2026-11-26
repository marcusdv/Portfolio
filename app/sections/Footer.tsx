const Footer = () => {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 py-10 text-center">
                <p className="text-sm text-muted">
                    Desenvolvido por <span className="text-foreground">&copy; Marcus Costa</span>
                </p>
                <p className="font-mono text-xs text-muted">{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
