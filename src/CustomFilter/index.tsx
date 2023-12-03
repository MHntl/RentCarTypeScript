import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";

type OptionType = {
  label: string;
  value: string;
};

type FilterPropType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterPropType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    //URL deki parametreleri koruyup ekleme yapmak için params'a append yada set kullanılır
    //setPara ile URL e parametre eklenebilir ancak öncekileri korumak gerekebilir
    const key = title === "Fuel Type" ? "fuel" : "year";
    if (selected?.value) {
      //önce var olan key değerini kaldır sonra ekleme yap yoksa hep aynı parametreyi farklı valuelarla URL e veriyor
      params.delete(key);
      params.append(key, selected?.value.toLowerCase());
    } else {
      //value yoksa URL den parametreyi kaldır
      params.delete(key);
    }
    //Params ı güncelledik şimdide URL i güncelleyelim
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit text-black">
      <Select
        onChange={(e) => setSelected((_prev) => e)}
        className="min-w-[100px]"
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
