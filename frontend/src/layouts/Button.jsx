
const Button = ({title}) => {
  return (
    <div>
      <button className=" px-6 py-1 text-semibold font-bold hover:bg-orange-900 text-white bg-orange-700 transition ease-in-out rounded-full ">
        {title}
      </button>
    </div>
  );
};

export default Button;
