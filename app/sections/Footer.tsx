const Footer = () => {
  return (
    <footer className="text-slate-500 text-center py-12 px-6 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm mb-2 font-medium">
          Desenvolvido por <span className="text-slate-700">Marcus Costa</span>
        </p>
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
