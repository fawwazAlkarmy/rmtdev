interface Props {
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function SearchForm({ searchText, setSearchText }: Props) {
  return (
    <form onSubmit={(e) => e.preventDefault()} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
