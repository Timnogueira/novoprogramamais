// Configuração compartilhada do projeto Programa + de Férnando Máximo.
// Estes dados são públicos por design — a chave anon/publishable é seguro
// expor no frontend, e a segurança fica por conta do RLS no Supabase.

const SUPABASE_URL = "https://axmhfmetgiusixlcvopd.supabase.co";
const SUPABASE_KEY = "sb_publishable_Clkf7RDK-SRMggdO8JM6cw_ywovSr0T";

// Cliente do Supabase, disponível como window.sb em todas as páginas
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helpers globais

window.WA_ASSESSORIA = "5511913239335"; // TROCAR: número da assessoria do Férnando para agendamento (formato 55+DDD+número, sem símbolos)
window.NOME_PROFISSIONAL = "Férnando Máximo";
window.NOME_SALAO = "Âme Concept";
window.NOME_PROGRAMA = "+";
window.ENDERECO_SALAO = "Jardim Paulistano, São Paulo / SP";
window.INSTAGRAM_URL = "https://instagram.com/fernand0maximo";

// Helpers
window.fmtData = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
};

window.fmtTipoVoucher = (tipo) => ({
  hidratacao: "Hidratação",
  hidratacao_premium: "Reconstrução capilar",
  reconstrucao_capilar: "Reconstrução capilar",
  corte: "Corte",
  maquiagem: "Maquiagem"
}[tipo] || tipo);

window.escapeHtml = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

// Garantir que Tailwind reconhece nossas cores
if (window.tailwind) {
  window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          teal: { DEFAULT: "#1F4E5C", dark: "#173B45", light: "#E8F0F2" },
          gold: { DEFAULT: "#B08D57", light: "#D9C29A" },
          cream: "#FAFAF7",
          ink: "#1B1B1B",
          muted: "#6B6B6B"
        },
        fontFamily: {
          serif: ['"Playfair Display"', "serif"],
          sans: ["Inter", "system-ui", "sans-serif"]
        }
      }
    }
  };
}
