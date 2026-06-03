import AboutMeSect from "@/components/aboutMe";
import ContactSect from "@/components/contact";
import HomeSect from "@/components/home";
import Networks from "@/components/networks";
import PortSect from "@/components/portyfolio";
import ServicesSect from "@/components/services";
import SkillsSect from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full bg-black overflow-y-hidden">
      <HomeSect />
      <AboutMeSect />
      <ServicesSect />
      <SkillsSect />
      <PortSect />
      <Networks />
      <ContactSect />
    </main>
  );
}
