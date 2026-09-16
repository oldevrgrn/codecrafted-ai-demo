import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";

export default function StickyCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="max-w-lg mx-auto px-4 py-3 flex gap-3">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3.5 transition-all active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span>Call</span>
        </a>
        <a
          href={`sms:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[hsl(150,28%,42%)] hover:bg-[hsl(150,28%,36%)] text-white font-semibold rounded-xl py-3.5 transition-all active:scale-95"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Text Us</span>
        </a>
      </div>
      <div className="text-center pb-2 pt-0">
        <p className="text-xs text-muted-foreground">{site.tagline}</p>
      </div>
    </div>
  );
}
