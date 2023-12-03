import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  //URL'de limit parametresini varsa bana onun değerini getir
  //yoksa 5 olarak ata
  const limit = Number(params.get("limit")) || 5;

  const handleLimit = () => {
    // yeni limiti belirle
    const newLimit = String(limit + 5);
    // param değişkenini güncelle
    params.set("limit", newLimit);
    // url'i güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      <CustomButton
        disabled={limit === 30}
        handleClick={handleLimit}
        title="More"
      />
    </div>
  );
};

export default ShowMore;
