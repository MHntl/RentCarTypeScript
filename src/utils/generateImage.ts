import { colors } from "../constants";
import { CarType } from "../types";

export const generateImage = (car: CarType, angle?: string): string => {
  //JS nin kendisinde olan URL sınıfından yeni instance oluştur.
  const url: URL = new URL("https://cdn.imagin.studio/getimage"); //temel url buraya yazılır

  //Eklenecek parametreler bu şekilde verilir
  // dinamik bir şekilde url parametreler ekleme
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  //string içersindeki / olan kısmı ikiye bölüp dizi oluşturduk. dizinin ilk kısmını aldık
  //daha sonradan sadece bmw i3 bev (95 amp) deki bmw i3 ü almak için
  //boşluktan sonraki ilk kelimeyi al dedik
  url.searchParams.append("modelFamily", car.model.split("/")[0].split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  //Select Random Color
  const index = Math.floor(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[index]);
  //Oluşturulan URL'e url.href ile erişilir
  return url.href;
};
