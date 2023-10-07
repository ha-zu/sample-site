import CorporateInfo from "./CorporateInfo";
import CorporateMap from "./CorporateMap";

export const CorporateSection = () => {
  return (
    <section id="corporate" className="bg-gray-200">
      <div className="flex flex-col items-center p-5">
        <h3 className="text-slate-900 m-1 text text-3xl font-bold">会社情報</h3>
        CORPORATE
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-3">
        <CorporateInfo />
        <CorporateMap />
      </div>
    </section>
  );
};
