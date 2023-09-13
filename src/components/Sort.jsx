import React, { useContext, useState } from "react";
import Slider from "@mui/material/Slider";
import { LanguageContext, SortContext } from "../Router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import langData from "../languageData";

const Sort = () => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(langData[language].sort);

  useEffect(() => {
    setData(langData[language].sort);
  }, [language]);
  
  const { setSortedData } = useContext(SortContext);
  const products = useSelector((state) => state.fetchReducer.products);
  const [genderSec, setGenderSec] = useState("part-section hidden gender");
  const [colorSec, setColorSec] = useState("part-section  color hidden");
  const [brandSec, setBrandSec] = useState("part-section hidden brand");
  const [layoutSec, setLayoutSec] = useState("part-section layout hidden");
  const [range, setRange] = useState([5, 330]);
  //checkboxes
  const [checkHot, setCheckHot] = useState(false);
  const [checkMen, setCheckMen] = useState(false);
  const [checkWomen, setCheckWomen] = useState(false);
  const [checkYellow, setCheckYellow] = useState(false);
  const [checkBlack, setCheckBlack] = useState(false);
  const [checkBrown, setCheckBrown] = useState(false);
  const [checkBlue, setCheckBlue] = useState(false);
  const [checkGray, setCheckGray] = useState(false);
  const [checkGreen, setCheckGreen] = useState(false);
  const [checkOrange, setCheckOrange] = useState(false);
  const [checkPink, setCheckPink] = useState(false);
  const [checkAnnri, setCheckAnnri] = useState(false);
  const [checkKaenon, setCheckKaenon] = useState(false);
  const [checkKuboraum, setCheckKuboraum] = useState(false);
  const [checkMatsuda, setCheckMatsuda] = useState(false);
  const [checkAdidas, setCheckAdidas] = useState(false);
  const [checkCeline, setCheckCeline] = useState(false);
  const [checkDel, setCheckDel] = useState(false);
  const [checkGamma, setCheckGamma] = useState(false);
  const [checkGucci, setCheckGucci] = useState(false);
  const [checkHyperx, setCheckHyperx] = useState(false);
  const [checkMaui, setCheckMaui] = useState(false);
  const [checkPersol, setCheckPersol] = useState(false);
  const [checkRazer, setCheckRazer] = useState(false);
  const [checkRay, setCheckRay] = useState(false);
  const [checkVersace, setCheckVersace] = useState(false);
  const [checkZenni, setCheckZenni] = useState(false);
  const [checkCheap, setCheckCheap] = useState(false);
  const [checkExpensive, setCheckExpensive] = useState(false);

  useEffect(() => {
    setSortedData(products);
  }, []);

  function sortingData() {
    const sortHot = products.filter((product) =>
      checkHot
        ? product.hot == true
        : product.hot == true || product.hot == false
    );
    const sortRange = sortHot.filter(
      (product) => product.price >= range[0] && product.price <= range[1]
    );
    const sortGender = sortRange.filter((product) => {
      if (product.genderEn != "Both") {
        if (checkMen || checkWomen) {
          return (
            (checkMen && product.genderEn == "Men") ||
            (checkWomen && product.genderEn == "Women")
          );
        } else {
          return product;
        }
      } else {
        return product;
      }
    });
    const sortColor = sortGender.filter((product) => {
      if (
        checkYellow ||
        checkPink ||
        checkBlack ||
        checkBlue ||
        checkBrown ||
        checkGray ||
        checkGreen ||
        checkOrange
      ) {
        return (
          (checkYellow && product.colorEn == "Yellow") ||
          (checkPink && product.colorEn == "Pink") ||
          (checkBlack && product.colorEn == "Black") ||
          (checkBlue && product.colorEn == "Blue") ||
          (checkBrown && product.colorEn == "Brown") ||
          (checkGray && product.colorEn == "Gray") ||
          (checkGreen && product.colorEn == "Green") ||
          (checkOrange && product.colorEn == "Orange")
        );
      } else {
        return product;
      }
    });
    const sortBrand = sortColor.filter((product) => {
      if (
        checkKaenon ||
        checkAnnri ||
        checkKuboraum ||
        checkMatsuda ||
        checkAdidas ||
        checkCeline ||
        checkDel ||
        checkGamma ||
        checkGucci ||
        checkHyperx ||
        checkPersol ||
        checkZenni ||
        checkVersace ||
        checkRay ||
        checkRazer ||
        checkMaui
      ) {
        return (
          (checkKaenon && product.brand == "Kaenon-Rockaw") ||
          (checkAnnri && product.brand == "Annri") ||
          (checkKuboraum && product.brand == "Kuboraum") ||
          (checkMatsuda && product.brand == "Matsuda") ||
          (checkAdidas && product.brand == "Adidas") ||
          (checkCeline && product.brand == "Celine") ||
          (checkDel && product.brand == "Del-Mar") ||
          (checkGamma && product.brand == "Gamma-Ray") ||
          (checkGucci && product.brand == "Gucci") ||
          (checkHyperx && product.brand == "HyperX") ||
          (checkMaui && product.brand == "Maui-Jim") ||
          (checkPersol && product.brand == "Persol") ||
          (checkRazer && product.brand == "Razer") ||
          (checkRay && product.brand == "Ray-Ban") ||
          (checkVersace && product.brand == "Versace") ||
          (checkZenni && product.brand == "Zenni")
        );
      } else {
        return product;
      }
    });
    const sortedLayout = sortBrand.sort((a, b) => {
      return (
        (checkExpensive && b.price - a.price) ||
        (checkCheap && a.price - b.price)
      );
    });
    setSortedData(sortedLayout);
  }

  return (
    <div className="sort">
      <div className="two-sorts">
        <div className="sort-part price">
          <span>{data.price}</span>
          <Slider
            min={5}
            max={330}
            value={range}
            onChange={(event, newValue) => {
              setRange(newValue);
            }}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="sort-part hot">
          <input
            onChange={() => {
              setCheckHot(!checkHot);
            }}
            value={checkHot}
            type="checkbox"
            id="hot"
          />
          <label htmlFor="hot">{data.hot}</label>
        </div>
      </div>
      <div className="two-sorts gender-color">
        <div
          className="sort-part"
          onMouseEnter={() => {
            setGenderSec("part-section gender");
          }}
          onMouseLeave={() => {
            setGenderSec("part-section gender hidden");
          }}
        >
          <span className="part-name">{data.gender}</span>
          <div className={genderSec}>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckMen(!checkMen);
                }}
                value={checkMen}
                type="checkbox"
                id="men"
              />
              <label htmlFor="men">{data.men}</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckWomen(!checkWomen);
                }}
                value={checkWomen}
                type="checkbox"
                id="women"
              />
              <label htmlFor="women">{data.women}</label>
            </div>
          </div>
        </div>
        <div
          className="sort-part"
          onMouseEnter={() => {
            setColorSec("part-section color");
          }}
          onMouseLeave={() => {
            setColorSec("part-section color hidden");
          }}
        >
          <span className="part-name">{data.color}</span>
          <div className={colorSec}>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckYellow(!checkYellow);
                }}
                value={checkYellow}
                type="checkbox"
                id="yellow"
              />
              <label htmlFor="yellow">{data.yellow}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "yellow" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckBlack(!checkBlack);
                }}
                value={checkBlack}
                type="checkbox"
                id="black"
              />
              <label htmlFor="black">{data.black}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "black" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckBrown(!checkBrown);
                }}
                value={checkBrown}
                type="checkbox"
                id="brown"
              />
              <label htmlFor="brown">{data.brown}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "brown" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckBlue(!checkBlue);
                }}
                value={checkBlue}
                type="checkbox"
                id="blue"
              />
              <label htmlFor="blue">{data.blue}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "blue" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckGray(!checkGray);
                }}
                value={checkGray}
                type="checkbox"
                id="gray"
              />
              <label htmlFor="gray">{data.gray}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckGreen(!checkGreen);
                }}
                value={checkGreen}
                type="checkbox"
                id="green"
              />
              <label htmlFor="green">{data.green}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "green" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckOrange(!checkOrange);
                }}
                value={checkOrange}
                type="checkbox"
                id="orange"
              />
              <label htmlFor="orange">{data.orange}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "orange" }}
              ></div>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckPink(!checkPink);
                }}
                value={checkPink}
                type="checkbox"
                id="pink"
              />
              <label htmlFor="pink">{data.pink}</label>
              <div
                className="circle-color"
                style={{ backgroundColor: "pink" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="two-sorts brand-layout">
        <div
          className="sort-part"
          onMouseEnter={() => {
            setBrandSec("part-section brand");
          }}
          onMouseLeave={() => {
            setBrandSec("part-section brand hidden");
          }}
        >
          <span className="part-name">{data.brand}</span>
          <div className={brandSec}>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckKaenon(!checkKaenon);
                }}
                value={checkKaenon}
                type="checkbox"
                id="kaenon-rockaw"
              />
              <label htmlFor="kaenon-rockaw">Kaenon-Rockaw</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckKuboraum(!checkKuboraum);
                }}
                value={checkKuboraum}
                type="checkbox"
                id="kuboraum"
              />
              <label htmlFor="kuboraum">Kuboraum</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckMatsuda(!checkMatsuda);
                }}
                value={checkMatsuda}
                type="checkbox"
                id="matsuda"
              />
              <label htmlFor="matsuda">Matsuda</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckAdidas(!checkAdidas);
                }}
                value={checkAdidas}
                type="checkbox"
                id="adidas"
              />
              <label htmlFor="adidas">Adidas</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckAnnri(!checkAnnri);
                }}
                value={checkAnnri}
                type="checkbox"
                id="annri"
              />
              <label htmlFor="annri">Annri</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckCeline(!checkCeline);
                }}
                value={checkCeline}
                type="checkbox"
                id="celine"
              />
              <label htmlFor="celine">Celine</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckDel(!checkDel);
                }}
                value={checkDel}
                type="checkbox"
                id="del-mar"
              />
              <label htmlFor="del-mar">Del-Mar</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckGamma(!checkGamma);
                }}
                value={checkGamma}
                type="checkbox"
                id="gamma-ray"
              />
              <label htmlFor="gamma-ray">Gamma-Ray</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckGucci(!checkGucci);
                }}
                value={checkGucci}
                type="checkbox"
                id="gucci"
              />
              <label htmlFor="gucci">Gucci</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckHyperx(!checkHyperx);
                }}
                value={checkHyperx}
                type="checkbox"
                id="hyperx"
              />
              <label htmlFor="hyperx">HyperX</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckMaui(!checkMaui);
                }}
                value={checkMaui}
                type="checkbox"
                id="maui-jim"
              />
              <label htmlFor="maui-jim">Maui-Jim</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckPersol(!checkPersol);
                }}
                value={checkPersol}
                type="checkbox"
                id="persol"
              />
              <label htmlFor="persol">Persol</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckRazer(!checkRazer);
                }}
                value={checkRazer}
                type="checkbox"
                id="razer"
              />
              <label htmlFor="razer">Razer</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckRay(!checkRay);
                }}
                value={checkRay}
                type="checkbox"
                id="ray-ban"
              />
              <label htmlFor="ray-ban">Ray-Ban</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckVersace(!checkVersace);
                }}
                value={checkVersace}
                type="checkbox"
                id="versace"
              />
              <label htmlFor="versace">Versace</label>
            </div>
            <div className="sort-property">
              <input
                onChange={() => {
                  setCheckZenni(!checkZenni);
                }}
                value={checkZenni}
                type="checkbox"
                id="zenni"
              />
              <label htmlFor="zenni">Zenni</label>
            </div>
          </div>
        </div>
        <div
          className="sort-part"
          onMouseEnter={() => {
            setLayoutSec("part-section layout");
          }}
          onMouseLeave={() => {
            setLayoutSec("part-section layout hidden");
          }}
        >
          <span className="part-name">{data.layout}</span>
          <div className={layoutSec}>
            <div className="sort-property">
              <label htmlFor="cheap">{data.cheap}</label>
              <input
                checked={checkCheap}
                onChange={() => {
                  setCheckCheap(!checkCheap);
                  setCheckExpensive(false);
                }}
                value={checkCheap}
                type="checkbox"
                id="cheap"
              />
            </div>
            <div className="sort-property">
              <label htmlFor="expensive">{data.expensive}</label>
              <input
                checked={checkExpensive}
                onChange={() => {
                  setCheckExpensive(!checkExpensive);
                  setCheckCheap(false);
                }}
                value={checkExpensive}
                type="checkbox"
                id="expensive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button-part">
        <button onClick={sortingData}>{data.btn}</button>
      </div>
    </div>
  );
};

export default Sort;
