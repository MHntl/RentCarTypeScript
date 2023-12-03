import { ButtonPropsType } from "../../types";

const CustomButton = ({
  disabled,
  designs,
  btnType,
  title,
  rIcon,
  handleClick,
}: ButtonPropsType) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`${designs} custom-btn bg-blue-500 rounded-full hover:bg-blue-800 text-white`}
      onClick={handleClick}
      style={disabled ? { background: "gray" } : {}}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
