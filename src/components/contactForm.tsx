export default function ContactForm() {
    return (
        <form className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex-1 form-element form-element-delay-1">
                    <input
                        className="input-field font-sans"
                        id="firstName"
                        type="text"
                        placeholder=""
                    />
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="firstName">
                        First Name
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-1">
                    <input
                        className="input-field font-sans"
                        id="lastName"
                        type="text"
                        placeholder=""
                    />
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="lastName">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex-1 form-element form-element-delay-2">
                    <input
                        className="input-field font-sans"
                        id="phone"
                        type="tel"
                        placeholder=""
                    />
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="phone">
                        Phone
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-2">
                    <input
                        className="input-field font-sans"
                        id="email"
                        type="email"
                        placeholder=""
                    />
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="email">
                        Email
                    </label>
                </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex-1 form-element form-element-delay-3">
                    <select
                        className="input-field font-sans"
                        id="service"
                    >
                        {[
                            { index: "Design", title: "Web Design" },
                            { index: "App", title: "Web Applications" },
                            { index: "Mobile", title: "Mobile Web Applications" }
                        ].map(item => (
                            <option key={item.index} value={item.index}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="service">
                        Choose a Service
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-3">
                    <textarea
                        className="input-field font-sans"
                        id="message"
                        rows={4}
                        placeholder=""
                    ></textarea>
                    <label className="mt-2 block font-sans text-xs font-bold uppercase tracking-widest text-[var(--muted)]" htmlFor="message">
                        Message
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button
                    className="bg-[var(--accent)] px-7 py-3 font-sans font-bold text-[#101211] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] form-element form-element-delay-4"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
}