export default function Modal({ score }) {
  return (
    <div className=" text-center">
      <div className="text-white font-bold text-lg">Score : {score} </div>
      <div
        onClick={() => (window.location = "/")}
        className="w-96 h-12 font-semibold  bg-white flex items-center justify-center mt-4 cursor-pointer rounded-lg text-[#163020]"
      >
        Yeniden Başla
      </div>
    </div>
  );
}
