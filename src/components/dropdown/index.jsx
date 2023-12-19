export default function Dropdown({ data, setDifficultyChange }) {
  return (
    <div>
      <select
        className="w-[375px] h-[50px] rounded-lg"
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
      >
        {data.map((dt, i) => (
          <option value={dt}>{dt}</option>
        ))}
      </select>
    </div>
  );
}
