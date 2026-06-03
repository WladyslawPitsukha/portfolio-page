export default function ContactForm() {
    return (
        <form className="space-y-4">
            <div className="flex gap-20">
                <div className="flex-1 form-element form-element-delay-1">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="firstName"
                        type="text"
                        placeholder=""
                    />
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="firstName">
                        First Name
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-1">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="lastName"
                        type="text"
                        placeholder=""
                    />
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="lastName">
                        Last Name
                    </label>
                </div>
            </div>
            <div className="flex gap-20">
                <div className="flex-1 form-element form-element-delay-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="phone"
                        type="tel"
                        placeholder=""
                    />
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="phone">
                        Phone
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-2">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="email"
                        type="email"
                        placeholder=""
                    />
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="email">
                        Email
                    </label>
                </div>
            </div>
            <div className="flex gap-20">
                <div className="flex-1 form-element form-element-delay-3">
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-black"
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
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="service">
                        Choose a Service
                    </label>
                </div>
                <div className="flex-1 form-element form-element-delay-3">
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-black"
                        id="message"
                        rows={4}
                        placeholder=""
                    ></textarea>
                    <label className="block text-gray-400 text-sm font-bold mt-1" htmlFor="message">
                        Message
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline form-element form-element-delay-4"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
}