import "./Converter.css";
import { useEffect, useState } from "react";
import { RiEqualFill } from "react-icons/ri";
import { IoIosCopy } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import pxtorem from "../../../utils/pxtorem";
import copyToClipboard from "../../../utils/copyToClipboard";

const Converter = () => {
  const [showPx, setShowPx] = useState(false);
  const [showRem, setShowRem] = useState(false);
  const [base, setBase] = useState(16);
  const [px, setPx] = useState(16);
  const [rem, setRem] = useState(1);

  useEffect(() => {
    setRem(pxtorem(px, base));
  }, [base, px]);

  return (
    <article className="converter_container">
      <div className="converter_header">
        <p>based</p>
        <input
          type="number"
          placeholder=""
          name="base"
          id="base"
          required
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <p>px.</p>
      </div>

      <div className="converter">
        <div className="converter_input_title">
          {showPx ? (
            <IoMdCheckmark className="s_icon" />
          ) : (
            <IoIosCopy
              className="s_icon s"
              onClick={() => {
                copyToClipboard(`${px}px`);
                setShowPx(true);

                setTimeout(() => {
                  setShowPx(false);
                }, 1000);
              }}
            />
          )}

          <p>px</p>
        </div>
        <input
          type="number"
          placeholder=""
          name="px"
          id="px"
          required
          value={px}
          onChange={(e) => setPx(e.target.value)}
        />
        <RiEqualFill className="s_icon" />
        <input
          type="number"
          placeholder=""
          name="rem"
          id="rem"
          disabled
          value={rem}
          onChange={(e) => setRem(e.target.value)}
        />
        <div className="converter_input_title">
          <p>rem</p>
          {showRem ? (
            <IoMdCheckmark className="s_icon" />
          ) : (
            <IoIosCopy
              className="s_icon s"
              onClick={() => {
                copyToClipboard(`${rem}rem`);
                setShowRem(true);

                setTimeout(() => {
                  setShowRem(false);
                }, 1000);
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default Converter;
