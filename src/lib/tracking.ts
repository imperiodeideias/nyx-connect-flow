const STORAGE_KEY = "nyx_attribution";
const SESSION_KEY = "nyx_session_id";

export type Attribution = {
  session_id: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  device_type?: string;
};

function deviceType(): string {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Derives a readable origin label from UTMs, click ids and referrer. */
export function originLabel(a: Attribution): string {
  const source = (a.utm_source ?? "").toLowerCase();
  const medium = (a.utm_medium ?? "").toLowerCase();
  if (medium.includes("qr") || source.includes("qr")) return "QR Code";
  if (a.gclid || source.includes("google")) return "Google";
  if (a.fbclid || source.includes("instagram")) return "Instagram";
  if (source.includes("linkedin")) return "LinkedIn";
  if (source.includes("mail") || medium.includes("email")) return "E-mail";
  if (a.utm_campaign || a.utm_source) return "Campanhas";
  const ref = a.referrer ?? "";
  if (!ref) return "Direto";
  if (ref.includes("google.")) return "Google";
  if (ref.includes("instagram.")) return "Instagram";
  if (ref.includes("linkedin.")) return "LinkedIn";
  return "Outros";
}

/** Reads UTMs from the URL once per session and keeps them for the conversion. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return { session_id: "ssr" };

  let sessionId = sessionStorage.getItem(SESSION_KEY);
  const isNewSession = !sessionId;
  if (!sessionId) {
    sessionId = newId();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  const params = new URLSearchParams(window.location.search);
  const stored = sessionStorage.getItem(STORAGE_KEY);
  const previous: Partial<Attribution> = stored ? JSON.parse(stored) : {};

  const pick = (key: string) => params.get(key) ?? (previous as Record<string, string>)[key] ?? undefined;

  const attribution: Attribution = {
    session_id: sessionId,
    utm_source: pick("utm_source"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    utm_content: pick("utm_content"),
    utm_term: pick("utm_term"),
    gclid: pick("gclid"),
    fbclid: pick("fbclid"),
    referrer: previous.referrer ?? (document.referrer || undefined),
    device_type: deviceType(),
  };

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  return { ...attribution, ...(isNewSession ? {} : {}) };
}

export function isFirstViewOfSession(): boolean {
  if (typeof window === "undefined") return false;
  const key = "nyx_session_counted";
  if (sessionStorage.getItem(key)) return false;
  sessionStorage.setItem(key, "1");
  return true;
}
