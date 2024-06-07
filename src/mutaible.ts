interface MutaibleOptions {
    enhanceSEO?: boolean;
}

class Mutaible {
    options: MutaibleOptions;

    constructor(options?: MutaibleOptions) {
        this.options = options || {};
        this.init();
    }

    init(): void {
        // If SEO enhancement is enabled, run the enhancement logic
        if (this.options.enhanceSEO) {
            this.enhanceSEO();
        } else {
            this.blockBots();
        }
    }

    blockBots(): void {
        if (typeof window !== 'undefined' && navigator.userAgent.match(/bot|crawler|spider|crawling/i)) {
            window.location.href = "about:blank"; // Redirect bots
        }
    }

    enhanceSEO(): void {
        // Example SEO enhancement logic
        document.title += " | Enhanced for SEO";
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = "This page is enhanced for SEO by Mutaible.";
        document.head.appendChild(meta);
    }
}

export default Mutaible;

(window as any).Mutaible = Mutaible;
