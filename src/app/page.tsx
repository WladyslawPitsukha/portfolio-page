import AboutMeSect from "@/components/aboutMe";
import ContactSect from "@/components/contact";
import HomeSect from "@/components/home";
import Networks from "@/components/networks";
import PortSect from "@/components/portyfolio";
import ServicesSect from "@/components/services";
import SkillsSect from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-transparent">
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
