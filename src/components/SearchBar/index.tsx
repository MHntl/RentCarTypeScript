import ReactSelect from "react-select";
import { makes } from "../../constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

type ButtonProps = {
  design?: string;
};
//! Button Component
const SearchButton = ({ design }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${design}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};
//-------------------------------------------------------------
type OptionType = {
  label: string;
  value: string;
};
//! SearchBar Component
const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  //ReactSelect'in options kısmı label-value şeklinde çalıştığı için elimizdeki veriyi bu formata çevirdik
  //Sistemdeki her değişiklikte Arama kısmının tekrar render olmaması için useMemo kullandık = Böylelikle ilk render oldugunda hafızaya alacak ve bir daha değişiklik olana kadar hafızasındaki veriyi bize verecek
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //URL'deki tüm parametreleri temizle ve aşağıdakileri ekle
    setParams({
      make,
      model,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          options={options}
          onChange={(e: OptionType | null) => e && setMake(e.value)}
          className="w-full text-black"
        />
        <SearchButton design={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          className="absolute ml-4"
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Exm:Civic"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
