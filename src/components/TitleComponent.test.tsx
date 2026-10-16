import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import TitleComponent from "./TitleComponent";

describe("TitleComponent", () => {
  it("renders the section title larger than its description at every breakpoint", () => {
    const markup = renderToStaticMarkup(
      createElement(TitleComponent, {
        title: "About me",
        description: "A section description",
        position: "start",
      }),
    );

    expect(markup).toContain(
      '<h1 class="font-sans text-2xl font-bold uppercase tracking-[0.3em] text-[var(--accent)] sm:text-3xl lg:text-4xl">About me</h1>',
    );
    expect(markup).toContain(
      '<h3 class="max-w-3xl text-left text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">A section description</h3>',
    );
  });
});
